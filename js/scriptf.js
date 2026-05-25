function calcularEspaciosFibo() {
    // 1. Capturar el valor del formulario obligatoriamente con getElementById
    let inputMedida = document.getElementById("medidaBase").value;
    let medidaBase = parseInt(inputMedida);
    
    // Capturamos el contenedor donde mostraremos el resultado
    let contenedorResultado = document.getElementById("resultado");

    // 2. Validación: Verificar que el usuario haya ingresado un número válido
    if (isNaN(medidaBase) || medidaBase <= 0) {
        contenedorResultado.innerHTML = `<p style="color: #dc3545; font-weight: bold;">❌ Por favor, ingresa un tamaño en píxeles válido y mayor a 0.</p>`;
        return;
    }

    // 3. Algoritmo de Fibonacci usando variables simples (Sin vectores / arrays)
    // Queremos generar los primeros 7 niveles de proporciones de diseño
    let a = 0;
    let b = 1;
    let c;
    
    // Empezamos a armar el código HTML que se inyectará en la página
    let HTMLResultado = `
        <p>Tomando como base un lienzo de <strong>${medidaBase}px</strong>, aquí tienes la escala de Fibonacci recomendada para tus bloques de diseño (secciones, banners, márgenes):</p>
        <ul class="lista-fibo">
    `;

    // Ciclo para calcular los términos de Fibonacci y aplicarlos al diseño
    for (let i = 1; i <= 7; i++) {
        // En el primer paso usamos 'b' (1), luego calculamos la sucesión normal
        if (i === 1) {
            c = b;
        } else {
            c = a + b;
            a = b;
            b = c;
        }

        // Aplicamos la proporción: multiplicamos la medida base por el factor Fibo
        // Usamos factores proporcionales pequeños para que las secciones queden armónicas
        let tamañoBloque = Math.round(medidaBase * (c / 34)); 

        HTMLResultado += `
            <li>
                <strong>Nivel ${i} (Factor ${c}):</strong> 
                <span>${tamañoBloque}px</span> 
                <small>-> Ideal para: ${obtenerSugerenciaDiseño(i)}</small>
            </li>
        `;
    }

    HTMLResultado += `</ul>`;
    HTMLResultado += `
        <div class="conclusion-corta">
            <p>💡 <strong>¿Cómo usarlo?</strong> Combina estas medidas. Por ejemplo, puedes hacer que tu columna principal mida el Nivel 6 y tu barra lateral el Nivel 5 para lograr un equilibrio visual perfecto.</p>
        </div>
    `;

    // 4. Mostrar el resultado directamente en la pantalla (Obligatorio)
    contenedorResultado.innerHTML = HTMLResultado;
}

// Función auxiliar para dar sugerencias de diseño según el nivel
function obtenerSugerenciaDiseño(nivel) {
    switch(nivel) {
        case 1: return "Márgenes pequeños o espacios entre elementos (paddings).";
        case 2: return "Espaciado entre tarjetas (cards) o subtítulos.";
        case 3: return "Botones de acción o avatares de usuario.";
        case 4: return "Ancho de tarjetas pequeñas o banners secundarios.";
        case 5: return "Columnas secundarias o barras laterales (sidebars).";
        case 6: return "Columna principal de contenido o sección de texto.";
        case 7: return "Contenedor principal, banners hero o fondo del lienzo.";
        default: return "Componente de diseño.";
    }
}