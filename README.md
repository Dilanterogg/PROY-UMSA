# Módulo de Soluciones Algorítmicas (PROY-UMSA)
### Desarrollo Web - Aplicación Práctica de Estructuras de Control de Flujo

Este repositorio centraliza un compendio de soluciones e interfaces interactivas que demuestran la utilidad real de conceptos matemáticos discretos en la ingeniería y el desarrollo de software actual. A través de este portal, se exploran y resuelven problemáticas del entorno profesional aplicando la **Sucesión de Fibonacci** y la teoría de **Números Primos**.

---

##  Estructura del Proyecto

El proyecto está diseñado de forma modular, responsiva y fluida, dividido en tres apartados clave:

1. **Fibo-Architect (Módulo Pure Fibonacci)**
   * **Problema:** El diseño arbitrario y desproporcionado en interfaces web genera caos visual y fatiga cognitiva.
   * **Solución:** Consola interactiva que calcula dimensiones armónicas en píxeles utilizando la Sucesión de Fibonacci, emulando las proporciones orgánicas de la naturaleza (Proporción Áurea) para la maquetación UI/UX.

2. **Fibo-Pay Gateway (Módulo Híbrido Avanzado)**
   * **Problema:** Vulnerabilidad en tokens bancarios aleatorios tradicionales ante ataques por diccionario o fuerza bruta.
   * **Solución:** Simulador de pasarela financiera que genera llaves de seguridad OTP (*One-Time Password*). El algoritmo genera la serie de Fibonacci en tiempo real y evalúa simultáneamente los factores primos de cada término. Solo los números que cumplen ambas condiciones son aprobados como llaves de alta encriptación.

3. **Antivirus ID-Scanner (Módulo Pure Primes)**
   * **Problema:** Inyección de código malicioso en paquetes de software que altera los identificadores digitales (hashes) sin dejar rastro visible.
   * **Solución:** Simulador forense que valida la integridad de un archivo analizando la "primatilidad" de su ID digital mediante un bucle iterativo de descarte. Si el sistema detecta que el identificador es un número compuesto (más de dos divisores), se dispara una alerta de seguridad por archivo corrupto.

---

##  Tecnologías Utilizadas

* **HTML5:** Estructuración semántica avanzada (uso de contenedores `main`, `aside`, `section` y manejo de grids).
* **CSS3:** Diseño responsivo adaptado a dispositivos móviles mediante Media Queries, uso de Flexbox/Grid y estilización personalizada en Modo Oscuro.
* **JavaScript (Vanilla JS):** Lógica algorítmica pura para el procesamiento numérico y manipulación dinámica del DOM mediante `document.getElementById` e inyección de datos.

Aquí pones tu texto normal...

### Estructura del Directorio

```text
PROY-UMSA/
├── Css/
│   ├── estilos.css       (Estilos del menú/index principal)
│   ├── estilosf.css      (Estilos de Fibo-architect)
│   ├── estilosp.css      (Estilos de Antivirus ID-Scanner)
│   └── estilospf.css     (Estilos de Fibo-Pay)
├── imágenes FN/
│   ├── antivirus.png
│   ├── fibonnacci.png
│   ├── fórmula.png
│   ├── paga electronica.png
│   └── tarjeta digital.jpg
├── js/
│   ├── scriptf.js        (Lógica de Fibo-architect)
│   ├── scriptp.js        (Lógica de Antivirus ID-Scanner)
│   └── scriptpf.js       (Lógica de Fibo-Pay)
├── Fibo-architect.html   (Módulo 1: Fibonacci)
├── index.html            (Portal principal con los 3 apartados)
├── prim-fibo.html        (Módulo 2: Híbrido Fibo-Pay)
└── primos.html           (Módulo 3: Antivirus)
\```
