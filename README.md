<div align="center">
  <!-- BANNER NATIVO EN DEGRADADO LILA AVANZADO (ESTILO CORE) -->
  <table width="100%">
    <tr>
      <td align="center" style="background: linear-gradient(135deg, #2e0854 0%, #4a148c 40%, #7c4dff 100%); padding: 55px 20px; border-radius: 16px; border: 1px solid #7c4dff;">
        <h1 style="color: #ffffff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; font-size: 3.1em; text-shadow: 4px 4px 8px rgba(0,0,0,0.6); letter-spacing: 1px;">Net-Troubleshooter</h1>
        <p style="color: #e040fb; font-size: 1.25em; margin-top: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">Simulador de Diagnóstico SMR</p>
        <p style="color: #b39ddb; font-size: 1.05em; margin-top: 5px; font-style: italic;">"Debugging life, one line at a time."</p>
        <br>
        <!-- ETIQUETA DE SIMULACIÓN -->
        <img src="https://img.shields.io/badge/Tipo-Simulación_Educativa-b39ddb?style=for-the-badge&logo=code-climate&logoColor=white" alt="Simulation" />
        &nbsp;&nbsp;
        <a href="https://maite-willinski.github.io/net-troubleshooter/" target="_blank">
          <img src="https://img.shields.io/badge/Demo-%F0%9F%94%97_Ver_Sitio_En_Vivo-ff79c6?style=for-the-badge&labelColor=121212&color=b39ddb" alt="Live Demo" />
        </a>
      </td>
    </tr>
  </table>
</div>

<br>

<h1 align="center">Resolución de Incidencias en Redes SMR 👋 ✨</h1>

<p align="center">
  <strong>⚠️ Nota de Proyecto:</strong> Net-Troubleshooter es un <strong>simulador interactivo de terminal</strong>. Todos los diagnósticos, direcciones IP (APIPA/DHCP) y comandos mostrados son una representación ficticia diseñada con fines educativos para recrear el flujo de trabajo de un técnico de redes.
</p>

<p align="center">
  El proyecto fusiona una estética retro-futurista de monitor CRT con una lógica asíncrona interactiva, gestionando de forma autónoma el estado de conexión del usuario y su persistencia en el navegador.
</p>

<!-- SEPARADOR NATIVO LILA -->
<hr style="border: 0; height: 3px; background: linear-gradient(to right, rgba(74, 20, 140, 0), #9575cd, rgba(179, 157, 219, 0)); margin: 35px 0;">

## 📊 Panel de Simulación (Mock Data)

<table width="100%" align="center">
  <tr>
    <td align="center" width="25%" style="background-color: #1a1a2e; border-radius: 8px; padding: 15px; border: 1px solid #4a148c;">
      <h3 style="color: #b39ddb; margin: 0;">🌐 Interfaz</h3>
      <p style="font-size: 1.5em; font-weight: bold; margin: 10px 0; color: #fff;">DOWN</p>
      <small style="color: #888;">Estado inicial</small>
    </td>
    <td align="center" width="25%" style="background-color: #1a1a2e; border-radius: 8px; padding: 15px; border: 1px solid #4a148c;">
      <h3 style="color: #b39ddb; margin: 0;">💻 IP Local</h3>
      <p style="font-size: 1.5em; font-weight: bold; margin: 10px 0; color: #fff;">APIPA</p>
      <small style="color: #888;">169.254.x.x</small>
    </td>
    <td align="center" width="25%" style="background-color: #1a1a2e; border-radius: 8px; padding: 15px; border: 1px solid #4a148c;">
      <h3 style="color: #b39ddb; margin: 0;">💾 Storage</h3>
      <p style="font-size: 1.5em; font-weight: bold; margin: 10px 0; color: #fff;">Active</p>
      <small style="color: #888;">Persistencia local</small>
    </td>
    <td align="center" width="25%" style="background-color: #1a1a2e; border-radius: 8px; padding: 15px; border: 1px solid #4a148c;">
      <h3 style="color: #b39ddb; margin: 0;">⏱️ Ping</h3>
      <p style="font-size: 1.5em; font-weight: bold; margin: 10px 0; color: #fff;">12ms</p>
      <small style="color: #888;">Latencia simulada</small>
    </td>
  </tr>
</table>

<!-- SEPARADOR NATIVO LILA -->
<hr style="border: 0; height: 3px; background: linear-gradient(to right, rgba(74, 20, 140, 0), #9575cd, rgba(179, 157, 219, 0)); margin: 35px 0;">

## 🚀 Funcionalidades y Comandos

- 🛠️ **`fix` (DHCP Renew):** Simula el protocolo de reparación liberando y renovando la configuración IP al detectar un error de red.
- 📡 **`ping` & `tracert`:** Diagnóstico de conectividad asíncrono hacia el gateway local y el DNS de Google, reaccionando al estado actual de la interfaz.
- 🖥️ **Monitor CRT & UX:** Diseño inmersivo con líneas de escaneo (*scanlines*), efecto de parpadeo (*flicker*), efecto *typewriter* y cursor de bloque sólido interactivo.
- 🧠 **Persistencia de Estado:** Uso de `localStorage` para recordar si la red ha sido reparada o sigue inactiva incluso tras refrescar el entorno.

<!-- SEPARADOR NATIVO LILA -->
<hr style="border: 0; height: 3px; background: linear-gradient(to right, rgba(74, 20, 140, 0), #9575cd, rgba(179, 157, 219, 0)); margin: 35px 0;">

## 🛠️ Stack Tecnológico

<table align="center" width="100%">
  <tr>
    <td align="center" width="50%" valign="top">
      <h3>🌐 Interfaz y Estructura</h3>
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /><br><br>
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    </td>
    <td align="center" width="50%" valign="top">
      <h3>⚙️ Lógica y Despliegue</h3>
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS" /><br><br>
      <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
    </td>
  </tr>
</table>

<br>

<div align="center">
  <sub>"Proyecto de laboratorio personal: Experimentación con interfaces dinámicas y lógica de sistemas."</sub>
</div>
