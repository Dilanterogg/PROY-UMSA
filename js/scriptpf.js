function procesarPagoSeguro() {
    // 1. Capturar datos obligatoriamente con document.getElementById
    let monto = parseFloat(document.getElementById("montoPago").value);
    let bloques = parseInt(document.getElementById("bloquesSeguridad").value);
    let contenedorResultado = document.getElementById("resultado");

    // 2. Validaciones estrictas de los datos ingresados
    if (isNaN(monto) || monto <= 0) {
        contenedorResultado.innerHTML = `<p class="alerta-error">❌ Error: El monto de transferencia debe ser mayor a 0.</p>`;
        return;
    }
    if (isNaN(bloques) || bloques <= 0 || bloques > 22) {
        contenedorResultado.innerHTML = `<p class="alerta-error">❌ Error: El nivel de escaneo debe estar entre 1 y 22 bloques.</p>`;
        return;
    }

    // 3. Algoritmo Integrado: Generación de Fibonacci sin vectores
    let a = 0;
    let b = 1;
    let c;

    // Variables para construir el reporte visual en la página
    let listadoTokens = "";
    let ultimoTokenValido = 0;
    let tokensContador = 0;

    // Recorremos los términos solicitados por el usuario
    for (let i = 1; i <= bloques; i++) {
        if (i === 1) {
            c = a;
        } else if (i === 2) {
            c = b;
        } else {
            c = a + b;
            a = b;
            b = c;
        }

        // Sub-algoritmo obligario para verificar si el número 'c' actual es primo
        let divisores = 0;
        for (let j = 1; j <= c; j++) {
            if (c % j === 0) {
                divisores++;
            }
        }

        // Si tiene exactamente 2 divisores, es un Primo de Fibonacci (Token Válido)
        if (divisores === 2) {
            tokensContador++;
            ultimoTokenValido = c; // Guardamos el último encontrado para usarlo como firma final
            listadoTokens += `<li class="token-aprobado">🟢 Bloque #${i}: Factor Fibo (${c}) -> <strong>¡APROBADO COMO TOKEN!</strong></li>`;
        } else {
            listadoTokens += `<li class="token-rechazado">🔴 Bloque #${i}: Factor Fibo (${c}) -> Compuesto (Vulnerable)</li>`;
        }
    }

    // 4. Construcción del HTML final que se inyectará en la interfaz
    let htmlFinal = "";

    if (tokensContador > 0) {
        // ÉXITO: Se encontraron llaves seguras y se procesa la transferencia
        htmlFinal = `
            <div class="tarjeta-bancaria-exito">
                <h3>✅ TRANSFERENCIA AUTORIZADA</h3>
                <p class="monto-final">Monto aprobado: $${monto.toFixed(2)} USD</p>
                <div class="token-box">
                    <small>FIRMADO DIGITALMENTE POR TOKEN OTP:</small>
                    <div class="codigo-token">FP-${ultimoTokenValido}-${bloques}</div>
                </div>
                <p class="detalles">El protocolo de seguridad aisló <strong>${tokensContador} llaves criptográficas</strong> en la memoria del servidor.</p>
                
                <details class="historial-auditoria">
                    <summary>Ver registro de auditoría matemática (logs)</summary>
                    <ul>${listadoTokens}</ul>
                </details>
            </div>
        `;
    } else {
        // FALLO: No se encontraron primos en los bloques iniciales (Ej. si eligen muy pocos bloques como 1 o 2)
        htmlFinal = `
            <div class="tarjeta-bancaria-error">
                <h3>🚨 TRANSACCIÓN RECHAZADA</h3>
                <p>El nivel de escaneo configurado (${bloques} bloques) no generó ninguna llave matemática robusta (Primos de Fibonacci).</p>
                <p class="sugerencia"><strong>Solución:</strong> Sube el nivel de escaneo a un valor mayor (mínimo 4) para permitir que el algoritmo encuentre números primos como el 2, 3 o 5.</p>
            </div>
        `;
    }

    // 5. Mostrar resultados en la página (Obligatorio)
    contenedorResultado.innerHTML = htmlFinal;
}