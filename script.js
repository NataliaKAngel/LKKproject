// script.js
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}

document.querySelectorAll('.image-link').forEach(link => {
    link.onclick = function(event) {
        event.preventDefault();
        const modalId = this.getAttribute('href').substring(1); // Get the modal id from href
        document.getElementById(modalId).style.display = "block"; // Show the modal
    }
});
