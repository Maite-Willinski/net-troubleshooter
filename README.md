# 🔮 Net-Troubleshooter | Simulador de Terminal

> *Simulador interactivo de diagnóstico de redes SMR.*

---

### 🟣 Descripción del Proyecto

El **Net-Troubleshooter** es una herramienta didáctica desarrollada para recrear el entorno de una terminal de sistemas, permitiendo al usuario enfrentarse a incidencias de conectividad mediante una interfaz inmersiva. Este proyecto representa técnicamente el flujo de trabajo de un técnico de redes ante un error de direccionamiento IP.

---

### 🟣 Características Principales

* **Lógica de Red Dinámica:** Simulación realista de un error **APIPA** (IP: `169.254.x.x`), obligando al usuario a ejecutar protocolos de reparación.
* **Persistencia de Estado:** Integración de `localStorage` para recordar el estado de la conexión (`UP`/`DOWN`) incluso tras recargar el navegador.
* **Diseño Inmersivo:** Estética retro-futurista con efectos de monitor **CRT** (líneas de escaneo, parpadeo *flicker* y cursor de bloque sólido).
* **Experiencia de Usuario:** Efecto de máquina de escribir (*typing effect*) y foco automático para una interacción fluida.

---

### 🟣 Comandos del Sistema

| Comando | Acción |
| :--- | :--- |
| `ayuda` | Despliega la guía de comandos disponibles. |
| `ipconfig` | Muestra el estado del adaptador y diagnóstico de errores. |
| `ping` | Verifica la comunicación con el Gateway. |
| `fix` | Protocolo de reparación (simulando `ipconfig /release` y `renew`). |
| `tracert` | Traza la ruta hacia el DNS de Google (`8.8.8.8`). |
| `status` | Consulta el estado actual de la interfaz. |
| `about` | Información sobre la desarrolladora del proyecto. |
| `reset` | Reinicia la sesión y el estado de la red. |
| `clear` | Limpia la consola. |

---

### 🟣 Stack Tecnológico

* **HTML5:** Estructura semántica de la terminal.
* **CSS3:** Estilos avanzados, animaciones mediante `@keyframes` y diseño responsivo.
* **JavaScript (ES6+):** Programación asíncrona (`async/await`), manejo del DOM y gestión de persistencia con `localStorage`.

---

### 🟣 Autoría

Proyecto desarrollado con pasión por **Maite Willinski**.
*“Debugging life, one line at a time.”*
