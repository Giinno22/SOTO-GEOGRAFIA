document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".event");
  
    events.forEach(event => {
      event.addEventListener("click", function() {
        const year = this.getAttribute("data-year");
        const cause = this.getAttribute("data-cause");
        const consequence = this.getAttribute("data-consequence");
  
        // Verificar si ya existe un elemento de detalles
        const existingDetails = document.querySelector(".event-details");
        if (existingDetails) {
          // Si existe, eliminarlo
          existingDetails.remove();
        } else {
          // Si no existe, crear uno nuevo y agregar detalles
          const details = document.createElement("div");
          details.classList.add("event-details");
          details.innerHTML = `<strong>Año:</strong> ${year}<br><strong>Causa:</strong> ${cause}<br><strong>Consecuencia:</strong> ${consequence}`;
  
          // Insertar detalles después del evento clickeado
          this.parentNode.insertBefore(details, this.nextSibling);
        }
      });
    });
  });
  