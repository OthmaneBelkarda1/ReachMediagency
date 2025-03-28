// Design data
const designs = [
    {
        id: 1,
        title: "Opportunité Académique",
        description: "Promotion pour des bourses d'études",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-onTR1PiH1MqBXgGNf50uIbIb7v2t4Y.png",
        category: "education"
    },
    {
        id: 2,
        title: "Université Gedik",
        description: "Bourses d'études à Istanbul",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JS9WF7f618Ld8P3iUfdx6N3QjnHGkN.png",
        category: "education"
    },
    {
        id: 3,
        title: "Services Médicaux",
        description: "Diplôme en services de salle d'opération",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HQKD7Ylx7zKLERCZXMAIe5pyJVj99w.png",
        category: "sante"
    },
    {
        id: 4,
        title: "Inscription Anticipée",
        description: "Promotion pour inscription universitaire",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HIE85sP3iLoHvugT2QEgd48Bk48jci.png",
        category: "education"
    },
    {
        id: 5,
        title: "Architecture",
        description: "Programme d'études en architecture",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lY3vbipRNHuShmTmfWdwrQZXr8WE3y.png",
        category: "education"
    },
    {
        id: 6,
        title: "Avenir Académique",
        description: "Perspectives d'avenir pour les diplômés",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dZxE7taFKq3FmMSpebYazGroqYx2Vy.png",
        category: "education"
    },
    {
        id: 7,
        title: "Études en Turquie",
        description: "Réservation de places académiques",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FKeNnPhPFLpJKOvgCZRnJ0l0xATthA.png",
        category: "education"
    },
    {
        id: 8,
        title: "Logement Étudiant",
        description: "Information sur le logement en Turquie",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TR7of5zMDREgRrMnQELbJ6rFrIBT43.png",
        category: "logement"
    },
    {
        id: 9,
        title: "Spécialisations Académiques",
        description: "Collage de programmes académiques",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PX3dYuVuNhWf2puVzXD9tTM2JxjjTj.png",
        category: "education"
    },
    {
        id: 10,
        title: "Eduworld International",
        description: "Programmes d'études internationaux",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NHBsato31O7EuRXHYvKQRMlIA0n2Xk.png",
        category: "international"
    }
];

// DOM Elements
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderDots = document.querySelector('.slider-dots');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const galleryGrid = document.querySelector('.gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Variables
let currentSlide = 0;
let filteredDesigns = [...designs];
let autoSlideInterval;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize slider
    initSlider();
    
    // Initialize gallery
    renderGallery(filteredDesigns);
    
    // Start auto slide
    startAutoSlide();
    
    // Initialize scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Initialize mobile menu
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Initialize nav links
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all links
            navLinksItems.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            item.classList.add('active');
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
});

// Initialize slider
function initSlider() {
    // Create slides
    filteredDesigns.forEach((design, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
            <div class="slide-image">
                <img src="${design.image}" alt="${design.title}" onclick="openImageModal('${design.image}')">
            </div>
            <div class="slide-content">
                <span class="slide-category">${capitalizeFirstLetter(design.category)}</span>
                <h3 class="slide-title">${design.title}</h3>
                <p class="slide-description">${design.description}</p>
                <p>Ce design a été créé pour promouvoir les opportunités éducatives et attirer l'attention des étudiants potentiels avec un style visuel attrayant et des messages clairs.</p>
                <div class="slide-buttons">
                    <a href="#" class="slide-btn">
                        <i class="fas fa-external-link-alt"></i>
                        Voir le projet complet
                    </a>
                    <a href="#" class="slide-btn">
                        <i class="fas fa-globe"></i>
                        Visiter le site
                    </a>
                </div>
            </div>
        `;
        sliderWrapper.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });
    
    // Set initial slide
    updateSlider();
    
    // Add event listeners
    prevArrow.addEventListener('click', prevSlide);
    nextArrow.addEventListener('click', nextSlide);
}

// Render gallery
function renderGallery(designs) {
    galleryGrid.innerHTML = '';
    
    designs.forEach(design => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <div class="gallery-image">
                <img src="${design.image}" alt="${design.title}" onclick="openImageModal('${design.image}')">
                <div class="gallery-overlay">
                    <div class="overlay-content">
                        <span class="overlay-category">${capitalizeFirstLetter(design.category)}</span>
                        <h3>${design.title}</h3>
                    </div>
                </div>
            </div>
            <div class="gallery-content">
                <h3>${design.title}</h3>
                <p>${design.description}</p>
            </div>
        `;
        galleryGrid.appendChild(item);
    });
}

// Filter gallery
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get category
        const category = btn.getAttribute('data-category');
        
        // Filter designs
        if (category === 'all') {
            filteredDesigns = [...designs];
        } else {
            filteredDesigns = designs.filter(design => design.category === category);
        }
        
        // Reset slider
        sliderWrapper.innerHTML = '';
        sliderDots.innerHTML = '';
        currentSlide = 0;
        
        // Reinitialize slider
        initSlider();
        
        // Render gallery
        renderGallery(filteredDesigns);
        
        // Restart auto slide
        startAutoSlide();
    });
});

// Slider functions
function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % filteredDesigns.length;
    updateSlider();
    resetAutoSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + filteredDesigns.length) % filteredDesigns.length;
    updateSlider();
    resetAutoSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Modal functions
function openImageModal(imageSrc) {
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
    document.body.style.overflow = 'hidden';
}

// Make openImageModal available globally
window.openImageModal = openImageModal;

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Scroll functions
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
}

// Mobile menu function
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Helper functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
