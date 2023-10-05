// Dark Mode Toggle

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")) {
        darkModeToggle.src = "images/sun-regular-24.png"
    } else {
        darkModeToggle.src = "images/moon-regular-24.png"
    }
})

darkModeToggle.addEventListener('mouseover', () => {
    if(document.body.classList.contains("dark-mode")) {
        darkModeToggle.src = "images/sun-solid-24.png"
    } else {
        darkModeToggle.src = "images/moon-solid-24.png"
    }
})

darkModeToggle.addEventListener('mouseleave', () => {
    if(document.body.classList.contains("dark-mode")) {
        darkModeToggle.src = "images/sun-regular-24.png"
    } else {
        darkModeToggle.src = "images/moon-regular-24.png"
    }
})

// Main Menu Toggle

const mainMenuContainer = document.getElementById('main-menu-container');
const mainMenuToggle = document.getElementById('main-menu-toggle');
const mainMenu = document.getElementById('main-menu');

mainMenuToggle.addEventListener('click', () => {
    mainMenuContainer.classList.toggle('active');
    mainMenu.classList.toggle('active');
    mainMenuToggle.classList.toggle('active');
})

// Nav Change on Scroll

const primaryHeader = document.querySelector('.primary-header');
const scrollWatcher = document.createElement('div');

const backToTop = document.querySelector('#back-to-top');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('scrolling', !entries[0].isIntersecting);
    backToTop.classList.toggle('scrolling', !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);

// Close Button

const closeButtons = document.querySelectorAll('.close-button');

closeButtons.forEach(closeButton => {
    const closeButtonParent = closeButton.parentNode;

    closeButton.addEventListener('click', () => {
        closeButtonParent.classList.toggle('closed');
    })
});

// Lighbox

const lightbox = document.getElementById('lightbox');
const fullScreenButton = document.querySelectorAll('.btn-full-screen');
const lightboxCloseButton = document.querySelectorAll('.lightbox-close-button');

fullScreenButton.forEach (openButton => {

    openButton.addEventListener('click', () => {
        const parentImageContainer = openButton.parentElement;
        const imageElement = parentImageContainer.getElementsByTagName('img');
        const imageSource = imageElement[0].src;
        const lightboxImage = lightbox.getElementsByTagName('img');
        lightboxImage[0].src = imageSource;

        lightbox.classList.toggle('active');
    })
})

lightboxCloseButton[0].addEventListener('click', () => {
    lightbox.classList.remove('active');
})

// Filter portfolio

function filterGallery(filterBy) {
    const galleryItems = document.querySelectorAll('.gallery-item');

    // lowercase
    // filterBy.toLower();

    console.log(filterBy);

    galleryItems.forEach(item => {
        if(item.dataset.category.includes(filterBy)) {
            item.style.display = "flex";
        } else item.style.display = "none";
    });
}   

// Color Picker

const colorPicker01 = document.querySelector('.color-1');
const colorPicker02 = document.querySelector('.color-2');
const colorPicker03 = document.querySelector('.color-3');
const colorPicker04 = document.querySelector('.color-4');
const rootElement = document.querySelector(':root');

console.log(rootElement);

colorPicker01.addEventListener('click', () => {
    rootElement.style.setProperty('--primary-hue', 180);
});
colorPicker02.addEventListener('click', () => {
    rootElement.style.setProperty('--primary-hue', 280);
});
colorPicker03.addEventListener('click', () => {
    rootElement.style.setProperty('--primary-hue', 80);
});
colorPicker04.addEventListener('click', () => {
    rootElement.style.setProperty('--primary-hue', 340);
});
