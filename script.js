document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Project filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Project data
    const projects = [
        {
            title: "Beaded Evening Bag",
            category: "beadwork",
            description: "Hand-beaded clutch with intricate floral pattern using seed beads and crystals.",
            image: "https://images.unsplash.com/photo-1610395219791-21b0353e43c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            title: "Crochet Summer Top",
            category: "crochet",
            description: "Lightweight cotton crochet top with delicate lace pattern, perfect for summer.",
            image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            title: "Beaded Statement Necklace",
            category: "beadwork",
            description: "Bold necklace featuring a mix of glass beads, pearls, and semi-precious stones.",
            image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        },
        {
            title: "Crochet Blanket",
            category: "crochet",
            description: "Cozy oversized blanket made with soft merino wool in a geometric pattern.",
            image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        },
        {
            title: "Boho Fashion Collection",
            category: "fashion",
            description: "Complete boho-chic outfit featuring crochet details and beaded accessories.",
            image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            title: "Delicate Beaded Bracelets",
            category: "beadwork",
            description: "Set of three delicate bracelets with freshwater pearls and gold accents.",
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Crochet Market Bag",
            category: "crochet",
            description: "Eco-friendly shopping bag made with durable cotton yarn in a mesh pattern.",
            image: "https://images.unsplash.com/photo-1533484211355-84a65c5a0d5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            title: "Fashion Accessories Set",
            category: "fashion",
            description: "Coordinated set featuring a beaded headband, necklace, and matching bracelet.",
            image: "C:\Users\23sta\OneDrive\Desktop\Ancy\Beaded image.jpg "
        }
    ];
    
    // Generate project items
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = `project-item ${project.category}`;
        
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-overlay">
                <span class="project-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
        
        projectGrid.appendChild(projectItem);
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        
        // Reset the form
        contactForm.reset();
    });
    
    // Animate elements when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-image, .about-text, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.animation = 'fadeInUp 1s ease forwards';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});