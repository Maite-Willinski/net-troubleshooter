const input = document.getElementById('command-input');
const output = document.getElementById('output');

// Persistencia: Cargamos el estado, si no existe, por defecto es 'down'
let networkStatus = localStorage.getItem('networkStatus') || 'down';

window.onload = async () => {
    input.focus();
    await addOutput("Iniciando sistema operativo de red... v2.0");
    await new Promise(r => setTimeout(r, 400));
    await addOutput(`Estado de la conexión cargado: ${networkStatus.toUpperCase()}`);
    await addOutput("Escribe 'ayuda' para ver comandos.");
};

document.querySelector('.terminal').addEventListener('click', () => input.focus());

async function typeWriter(text, element) {
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text.charAt(i);
        await new Promise(resolve => setTimeout(resolve, 10));
    }
}

async function addOutput(text) {
    const p = document.createElement('p');
    p.textContent = "> ";
    output.appendChild(p);
    await typeWriter(text, p);
    output.scrollTop = output.scrollHeight;
}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        if (command !== '') {
            const p = document.createElement('p');
            p.textContent = `maite@root:~$ ${input.value}`;
            output.appendChild(p);
            processCommand(command);
        }
        input.value = '';
    }
});

async function processCommand(cmd) {
    switch(cmd) {
        case 'clear': output.innerHTML = ''; break;
        case 'reset':
            localStorage.clear();
            location.reload();
            break;
     case 'ayuda':
    await addOutput("--- COMANDOS DISPONIBLES ---");
    await addOutput("ping    : Comprueba la conexión con el gateway.");
    await addOutput("ipconfig: Muestra el estado de la red (APIPA/DHCP).");
    await addOutput("fix     : Renueva la configuración IP.");
    await addOutput("tracert : Muestra el camino a Google DNS.");
    await addOutput("status  : Verifica el estado de la interfaz.");
    await addOutput("about   : Información sobre el desarrollador.");
    await addOutput("reset   : Reinicia la simulación.");
    await addOutput("clear   : Limpia la pantalla.");
    break;
        case 'about':
            await addOutput("Maite Willinski | SMR & Content Creator");
            await addOutput("Enfocada en tecnología, redes y mundos virtuales.");
            await addOutput("Jugando a Kingdom Hearts mientras debuggeo.");
            break;
        case 'status':
            await addOutput(`Estado actual: ${networkStatus.toUpperCase()}`);
            break;
        case 'ipconfig':
            if (networkStatus === 'down') {
                await addOutput("Adaptador Ethernet: IP 169.254.12.45 (Error: APIPA).");
                await addOutput("Sugerencia: Ejecuta 'fix' para renovar DHCP.");
            } else {
                await addOutput("Adaptador Ethernet: IP 192.168.1.50, Máscara 255.255.255.0, Puerta 192.168.1.1");
            }
            break;
        case 'ping':
            await addOutput("Iniciando ping a 192.168.1.1...");
            await new Promise(r => setTimeout(r, 1000));
            if (networkStatus === 'up') {
                await addOutput("Respuesta desde 192.168.1.1: bytes=32 tiempo=12ms TTL=64");
            } else {
                await addOutput("Error: Destination Host Unreachable.");
            }
            break;
        case 'fix':
            await addOutput("Negociando con servidor DHCP...");
            await new Promise(r => setTimeout(r, 1500));
            networkStatus = 'up';
            localStorage.setItem('networkStatus', 'up');
            await addOutput("¡Conexión restaurada! IP: 192.168.1.50");
            break;
        case 'tracert':
            await addOutput("Realizando traza a 8.8.8.8...");
            await new Promise(r => setTimeout(r, 800));
            await addOutput("1  <1ms  192.168.1.1 (Gateway)");
            await new Promise(r => setTimeout(r, 800));
            await addOutput("2  15ms  10.0.0.1 (ISP Core)");
            await new Promise(r => setTimeout(r, 800));
            await addOutput("3  22ms  8.8.8.8 (Google DNS)");
            await addOutput("Traza completada.");
            break;
        default: await addOutput(`Comando desconocido: ${cmd}. Escribe 'ayuda'.`);
    }
}