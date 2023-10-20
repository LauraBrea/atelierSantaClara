document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.getElementById("openModalButton");
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementById("closeModal");

    // Abrir el modal cuando se hace clic en el botón
    openModalButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Cerrar el modal cuando se hace clic en la "X" de cierre
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
