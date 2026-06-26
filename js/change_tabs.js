// Función para alternar entre pestañas
document.getElementById('product-tab').addEventListener('click', function() {
    document.getElementById('images-section').classList.add('hidden');
    document.getElementById('information-section').classList.remove('hidden');
    this.classList.add('bg-blue-600', 'text-white');
    this.classList.remove('bg-gray-100', 'text-gray-700');
    document.getElementById('images-tab').classList.add('bg-gray-100', 'text-gray-700');
    document.getElementById('images-tab').classList.remove('bg-blue-600', 'text-white');
});

document.getElementById('images-tab').addEventListener('click', function() {
    document.getElementById('images-section').classList.remove('hidden');
    document.getElementById('information-section').classList.add('hidden');
    this.classList.add('bg-blue-600', 'text-white');
    this.classList.remove('bg-gray-100', 'text-gray-700');
    document.getElementById('product-tab').classList.add('bg-gray-100', 'text-gray-700');
    document.getElementById('product-tab').classList.remove('bg-blue-600', 'text-white');
});

// Funciones para el visor de imágenes
function viewImage(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    modal.classList.remove('hidden');
    modalImg.src = src;
}

function closeModal() {
    document.getElementById('image-modal').classList.add('hidden');
}

function toExchangeImage(element) {
    document.getElementById('img_main').src = element.src;
}

// Cerrar modal al hacer clic fuera de la imagen
document.getElementById('image-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
