document.addEventListener("DOMContentLoaded", function () {
    const rsvpForm = document.getElementById("rsvpForm");

    rsvpForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita recargar la página

        // Captura de valores de los inputs
        const nombre = document.getElementById("nombre").value.trim();
        const asistencia = document.querySelector('input[name="asistencia"]:checked').value;
        const cancion = document.getElementById("cancion").value.trim();

        // 1. Validación básica
        if (nombre === "") {
            alert("Por favor, ingresa tu nombre y apellido para confirmar.");
            return;
        }

        // 2. Construcción del mensaje formateado
        let mensaje = `¡Hola Alexander! 👋\n\nConfirmación para tu fiesta de 22 años:\n`;
        mensaje += `👤 *Nombre:* ${nombre}\n`;
        mensaje += `🎉 *Asistencia:* ${asistencia}\n`;

        if (cancion !== "") {
            mensaje += `🎵 *Canción recomendada:* ${cancion}\n`;
        } else {
            mensaje += `🎵 *Canción recomendada:* Sorpréndeme con la música 😉\n`;
        }

        // Número de destino (Código de país + número, se asume Perú +51)
        const numeroTelefono = "51927030002"; 

        // Encodear el texto para URL
        const mensajeURLEncoded = encodeURIComponent(mensaje);

        // Crear enlace final
        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeURLEncoded}`;

        // Redirigir a WhatsApp en una nueva pestaña
        window.open(urlWhatsApp, "_blank");
    });
});