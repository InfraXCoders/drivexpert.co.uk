# JavaScript Guide for DriveXpert Website

## Table of Contents
1. [Introduction to JavaScript](#introduction-to-javascript)
2. [JavaScript Structure](#javascript-structure)
3. [DOM Manipulation](#dom-manipulation)
4. [Event Handling](#event-handling)
5. [Interactive Features](#interactive-features)
6. [Form Handling](#form-handling)
7. [Animations and Effects](#animations-and-effects)
8. [Best Practices](#best-practices)

## Introduction to JavaScript

JavaScript is a programming language that adds interactivity and dynamic behavior to web pages. It runs in the browser and can manipulate HTML elements, handle user interactions, and create engaging user experiences.

### Why JavaScript for DriveXpert Website?

- **Interactivity**: Makes static pages dynamic and engaging
- **User Experience**: Smooth animations and transitions
- **Form Handling**: Processes user input and submissions
- **Responsive**: Adapts to user actions and browser events
- **Modern Web**: Essential for contemporary web development

## JavaScript Structure

### Basic JavaScript Syntax
```javascript
// Variables
const hamburger = document.querySelector('.hamburger');
let isMenuOpen = false;

// Functions
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Event Listeners
hamburger.addEventListener('click', toggleMenu);
```

### JavaScript File Structure (script.js)
```javascript
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
```

## DOM Manipulation

### 1. Selecting Elements
```javascript
// Single Element
const hamburger = document.querySelector('.hamburger');
const navbar = document.getElementById('navbar');

// Multiple Elements
const navLinks = document.querySelectorAll('.nav-link');
const serviceCards = document.querySelectorAll('.service-card');

// Complex Selectors
const heroContent = document.querySelector('.hero .hero-content');
const firstServiceCard = document.querySelector('.services-grid .service-card:first-child');
```

### 2. Modifying Elements
```javascript
// Changing Classes
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');

// Changing Styles
element.style.backgroundColor = '#2563eb';
element.style.transform = 'translateY(-5px)';

// Changing Content
element.textContent = 'New Text';
element.innerHTML = '<strong>Bold Text</strong>';

// Changing Attributes
element.setAttribute('src', 'new-image.jpg');
element.removeAttribute('disabled');
```

### 3. Creating and Removing Elements
```javascript
// Creating Elements
const newCard = document.createElement('div');
newCard.className = 'service-card';
newCard.innerHTML = '<h3>New Service</h3>';

// Adding to DOM
document.querySelector('.services-grid').appendChild(newCard);

// Removing Elements
element.remove();
parentElement.removeChild(childElement);
```

## Event Handling

### 1. Event Listeners
```javascript
// Click Events
element.addEventListener('click', function(event) {
    console.log('Element clicked!');
    event.preventDefault(); // Prevent default behavior
});

// Mouse Events
element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.05)';
});

element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)';
});

// Keyboard Events
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Scroll Events
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    console.log('Scrolled to:', scrollPosition);
});
```

### 2. Event Delegation
```javascript
// Handle clicks on multiple elements efficiently
document.querySelector('.services-grid').addEventListener('click', (event) => {
    if (event.target.classList.contains('service-card')) {
        console.log('Service card clicked:', event.target);
    }
});
```

### 3. Form Events
```javascript
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    
    console.log('Form submitted:', { name, email });
});
```

## Interactive Features

### 1. Mobile Navigation Toggle
```javascript
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
```

### 2. Smooth Scrolling Navigation
```javascript
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```

### 3. Dynamic Navbar Background
```javascript
// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
```

### 4. Modal Popup System
```javascript
// Modal functionality for testimonials
function openModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modalImage.src = imageSrc;
    modalCaption.textContent = caption;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
});
```

## Form Handling

### 1. Form Validation
```javascript
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form elements
    const nameInput = this.querySelector('input[name="name"]');
    const emailInput = this.querySelector('input[name="email"]');
    const messageInput = this.querySelector('textarea[name="message"]');
    
    // Basic validation
    if (!nameInput.value.trim()) {
        alert('Please enter your name');
        nameInput.focus();
        return;
    }
    
    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        alert('Please enter a valid email address');
        emailInput.focus();
        return;
    }
    
    if (!messageInput.value.trim()) {
        alert('Please enter your message');
        messageInput.focus();
        return;
    }
    
    // Submit form
    submitForm(this);
});
```

### 2. Form Submission with Fetch API
```javascript
function submitForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Submit to Formspree
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    })
    .finally(() => {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}
```

### 3. Real-time Form Validation
```javascript
// Real-time email validation
const emailInput = document.querySelector('input[name="email"]');

emailInput.addEventListener('input', function() {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        this.style.borderColor = '#ef4444';
        this.setCustomValidity('Please enter a valid email address');
    } else {
        this.style.borderColor = '#10b981';
        this.setCustomValidity('');
    }
});
```

## Animations and Effects

### 1. Scroll Animations
```javascript
// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .gallery-item, .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
```

### 2. Parallax Effects
```javascript
// Simple parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
```

### 3. Typing Animation
```javascript
// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Usage
const heroTitle = document.querySelector('.hero-content h1');
if (heroTitle) {
    typeWriter(heroTitle, 'Welcome to DriveXpert Driving School');
}
```

## Best Practices

### 1. Code Organization
```javascript
// Group related functionality
const Navigation = {
    init() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.bindEvents();
    },
    
    bindEvents() {
        this.hamburger.addEventListener('click', this.toggleMenu.bind(this));
    },
    
    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
});
```

### 2. Error Handling
```javascript
// Try-catch for error handling
function safeQuerySelector(selector) {
    try {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Element not found: ${selector}`);
            return null;
        }
        return element;
    } catch (error) {
        console.error('Error selecting element:', error);
        return null;
    }
}

// Usage
const hamburger = safeQuerySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}
```

### 3. Performance Optimization
```javascript
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);
```

### 4. Accessibility
```javascript
// Keyboard navigation support
document.addEventListener('keydown', (event) => {
    // Close mobile menu with Escape key
    if (event.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Navigate with arrow keys
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        const nextSection = document.querySelector('#about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
```

## Advanced JavaScript Features

### 1. Local Storage
```javascript
// Save user preferences
function saveUserPreference(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getUserPreference(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// Usage
saveUserPreference('theme', 'dark');
const theme = getUserPreference('theme');
```

### 2. Fetch API for Data
```javascript
// Load testimonials from external source
async function loadTestimonials() {
    try {
        const response = await fetch('/api/testimonials');
        const testimonials = await response.json();
        
        testimonials.forEach(testimonial => {
            createTestimonialCard(testimonial);
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}
```

### 3. Service Workers (PWA)
```javascript
// Register service worker for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    });
}
```

## JavaScript Tools and Resources

### 1. Browser Developer Tools
- **Console**: Debug and test JavaScript
- **Sources**: Set breakpoints and debug
- **Network**: Monitor API calls and performance
- **Performance**: Analyze JavaScript performance

### 2. JavaScript Libraries
- **jQuery**: DOM manipulation and AJAX
- **Lodash**: Utility functions
- **Moment.js**: Date and time handling
- **Axios**: HTTP client

### 3. Modern JavaScript Features
- **ES6+**: Arrow functions, destructuring, modules
- **Async/Await**: Modern promise handling
- **Template Literals**: String interpolation
- **Destructuring**: Extract object properties

## Conclusion

JavaScript transforms your DriveXpert website from a static page into an interactive, engaging experience. By understanding:

- **DOM manipulation** for dynamic content
- **Event handling** for user interactions
- **Form processing** for data collection
- **Animations** for enhanced UX
- **Best practices** for performance and maintainability

You can create websites that not only look great but also provide excellent functionality and user experience.

The JavaScript in your DriveXpert website demonstrates modern web development practices and creates an engaging, professional user interface that effectively serves your driving school's needs. 