function escanearIdPrimo() {
    // 1. Capturar el valor del formulario obligatoriamente con getElementById
    let inputId = document.getElementById("numeroId").value;
    let numero = parseInt(inputId);
    
    // Capturamos las zonas de la página que vamos a modificar dinámicamente
    let contenedorResultado = document.getElementById("resultado");
    let bordeResultado = document.getElementById("bordeResultado");

    // 2. Validación: Que sea un número válido y mayor a 1 (el 1 no se considera primo)
    if (isNaN(numero) || numero <= 0) {
        contenedorResultado.innerHTML = `<p style="color: #dc3545; font-weight: bold;">❌ Por favor, ingresa un número de ID válido mayor a 0.</p>`;
        bordeResultado.style.borderTopColor = "#dc3545";
        return;
    }
    
    if (numero === 1) {
        contenedorResultado.innerHTML = `
            <p style="color: #ea580c; font-weight: bold;">⚠️ Análisis Sospechoso</p>
            <p>El ID <strong>1</strong> no cumple los criterios estándar de encriptación (no es primo ni compuesto). El paquete ha sido aislado por precaución.</p>
        `;
        bordeResultado.style.borderTopColor = "#ea580c";
        return;
    }

    // 3. Algoritmo de Verificación de Número Primo (Pedido por la guía)
    let contador = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++; // Cuenta cuántas veces se divide de forma exacta
        }
    }

    // 4. Evaluar los resultados y construir la respuesta en pantalla
    if (contador === 2) {
        // ES PRIMO: Cambiamos el color del borde a verde éxito
        bordeResultado.style.borderTopColor = "#16a34a";
        
        contenedorResultado.innerHTML = `
            <div style="color: #166534; background-color: #f0fdf4; padding: 15px; border-radius: 6px;">
                <h3 style="margin-bottom: 5px;">✅ ¡PAQUETE VERIFICADO!</h3>
                <p>El código ID <strong>${numero}</strong> es un <strong>NÚMERO PRIMO</strong> (solo divisible entre 1 y ${numero}).</p>
                <p style="margin-top: 10px; font-size: 0.9rem; color: #1e293b;"><strong>Estado:</strong> Integridad del 100%. No se detectan alteraciones maliciosas de código. El archivo es seguro para su ejecución.</p>
            </div>
        `;
    } else {
        // NO ES PRIMO: Cambiamos el color del borde a rojo peligro
        bordeResultado.style.borderTopColor = "#dc3545";
        
        contenedorResultado.innerHTML = `
            <div style="color: #991b1b; background-color: #fef2f2; padding: 15px; border-radius: 6px;">
                <h3 style="margin-bottom: 5px;">🚨 ¡ALERTA DE SEGURIDAD!</h3>
                <p>El código ID <strong>${numero}</strong> es un <strong>NÚMERO COMPUESTO</strong> (tiene un total de <strong>${contador} divisores</strong>).</p>
                <p style="margin-top: 10px; font-size: 0.9rem; color: #1e293b;"><strong>Estado:</strong> ¡INTEGRIDAD COMPROMETIDA! El algoritmo detectó que los factores digitales están alterados. Este archivo pudo haber sido inyectado con malware.</p>
            </div>
        `;
    }
}