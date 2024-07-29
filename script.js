document.addEventListener('DOMContentLoaded', function() {
    // Para el carrusel de videos
    const carousel = document.querySelector('.video-carousel');
    const leftArrow = document.createElement('button');
    const rightArrow = document.createElement('button');
    leftArrow.innerHTML = '&#9664;';
    rightArrow.innerHTML = '&#9654;';
    
    leftArrow.classList.add('carousel-arrow', 'left-arrow');
    rightArrow.classList.add('carousel-arrow', 'right-arrow');
    
    carousel.appendChild(leftArrow);
    carousel.appendChild(rightArrow);

    let scrollAmount = 0;

    leftArrow.addEventListener('click', () => {
        carousel.scrollBy({
            top: 0,
            left: -200,
            behavior: 'smooth'
        });
        scrollAmount -= 200;
    });

    rightArrow.addEventListener('click', () => {
        carousel.scrollBy({
            top: 0,
            left: 200,
            behavior: 'smooth'
        });
        scrollAmount += 200;
    });

    // Pra el menú desplegable de la barra lateral izquierda
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('main');
    
    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('active');
    });

    // Para insertar videos y anuncios
    const videoList = document.getElementById('videoList');
    
    const videos = [
        { title: 'Video 1', thumbnail: 'thumbnail1.jpg' },
        { title: 'Video 2', thumbnail: 'thumbnail2.jpg' },
        { title: 'Video 3', thumbnail: 'thumbnail3.jpg' },
        { title: 'Video 4', thumbnail: 'thumbnail4.jpg' },
        { title: 'Video 5', thumbnail: 'thumbnail5.jpg' },
        { title: 'Video 6', thumbnail: 'thumbnail6.jpg' },
        { title: 'Video 7', thumbnail: 'thumbnail7.jpg' },
        { title: 'Video 8', thumbnail: 'thumbnail8.jpg' },
        { title: 'Video 9', thumbnail: 'thumbnail9.jpg' },
        
    ];
    
    const adHTML = `
        <div class="ad-item">
            <img src="ad_thumbnail.jpg" alt="Anuncio">
            <h3>Anuncio</h3>
            <p>Publicidad aquí</p>
        </div>
    `;
    
    for (let i = 0; i < videos.length; i++) {
        const videoHTML = `
            <div class="video-item">
                <img src="${videos[i].thumbnail}" alt="${videos[i].title}">
                <h3>${videos[i].title}</h3>
                <p>Descripción del video...</p>
            </div>
        `;
        
        if (i % 6 === 0 && i !== 0) {
            // Insertar anuncio después de cada 6 videos
            videoList.insertAdjacentHTML('beforeend', adHTML);
        }
        
        videoList.insertAdjacentHTML('beforeend', videoHTML);
    }

    // Para el inicio de sesión
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeModalLogin = document.querySelector('#loginModal .close');
    
    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    closeModalLogin.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Para el registro
    const registerButton = document.getElementById('registerButton');
    const registerModal = document.getElementById('registerModal');
    const closeModalRegister = document.querySelector('#registerModal .close');
    
    registerButton.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    closeModalRegister.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
});
