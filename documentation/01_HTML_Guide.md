# HTML Guide for DriveXpert Website

## Table of Contents
1. [Introduction to HTML](#introduction-to-html)
2. [HTML Structure](#html-structure)
3. [Key HTML Elements Used](#key-html-elements-used)
4. [Semantic HTML](#semantic-html)
5. [Forms and User Input](#forms-and-user-input)
6. [Best Practices](#best-practices)
7. [Common HTML Tags](#common-html-tags)

## Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of websites.

### Why HTML for DriveXpert Website?

- **Universal Compatibility**: Works on all browsers and devices
- **SEO Friendly**: Search engines can easily understand the content
- **Accessible**: Screen readers can interpret the structure
- **Fast Loading**: Lightweight and efficient
- **Easy to Learn**: Simple syntax and structure

## HTML Structure

### Basic HTML Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DriveXpert | Driving Lessons</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

### Key Components:
- `<!DOCTYPE html>`: Declares this is an HTML5 document
- `<html lang="en">`: Root element with language attribute
- `<head>`: Contains metadata, links, and scripts
- `<body>`: Contains the visible content

## Key HTML Elements Used in DriveXpert

### 1. Navigation Section
```html
<nav class="navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <img src="images/drivexpert-logo-navbar.jpeg" alt="DriveXpert Logo">
            <span class="brand-title">DriveXpert</span>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#home" class="nav-link">Home</a>
            </li>
        </ul>
    </div>
</nav>
```

**Purpose**: Creates the main navigation menu
**Key Elements**:
- `<nav>`: Semantic element for navigation
- `<ul>` and `<li>`: Unordered list for menu items
- `<a>`: Links to different sections

### 2. Hero Section
```html
<section id="home" class="hero">
    <div class="container">
        <div class="hero-content">
            <h1>Welcome to DriveXpert Driving School</h1>
            <p>Driving lessons covering Stevenage, Letchworth, Hitchin & surrounding areas</p>
            <div class="contact-info">
                <p class="hero-contact-number">📞 Contact: 07957 197984</p>
                <p class="hero-whatsapp">WhatsApp: Text for Booking</p>
            </div>
        </div>
    </div>
</section>
```

**Purpose**: Main landing section with key information
**Key Elements**:
- `<section>`: Semantic section container
- `<h1>`: Main heading (important for SEO)
- `<p>`: Paragraphs for content
- `<div>`: Container for grouping elements

### 3. Services Section
```html
<section id="services" class="services">
    <div class="container">
        <h2>Our Services</h2>
        <div class="services-grid">
            <div class="service-card">
                <i class="fas fa-user-graduate"></i>
                <h3>Adult lessons</h3>
                <p>Professional instruction for adult learners</p>
            </div>
        </div>
    </div>
</section>
```

**Purpose**: Displays service offerings
**Key Elements**:
- `<h2>` and `<h3>`: Section and subsection headings
- `<i>`: Icons (Font Awesome)
- Grid layout with cards

### 4. Contact Form
```html
<form class="contact-form" action="https://formspree.io/f/mldnvqpw" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <input type="tel" name="phone" placeholder="Your Phone">
    <select name="service" required>
        <option value="">Select Service</option>
        <option value="adult-lessons">Adult lessons</option>
    </select>
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit" class="submit-btn">Send Message</button>
</form>
```

**Purpose**: Collects user inquiries
**Key Elements**:
- `<form>`: Form container
- `<input>`: Text, email, phone inputs
- `<select>`: Dropdown menu
- `<textarea>`: Multi-line text input
- `<button>`: Submit button

## Semantic HTML

### Why Semantic HTML Matters
- **SEO Benefits**: Search engines understand content better
- **Accessibility**: Screen readers can navigate effectively
- **Maintainability**: Code is self-documenting
- **Future-Proof**: Works with new technologies

### Semantic Elements Used
```html
<nav>          <!-- Navigation -->
<section>      <!-- Content sections -->
<header>       <!-- Page header -->
<footer>       <!-- Page footer -->
<main>         <!-- Main content -->
<article>      <!-- Self-contained content -->
<aside>        <!-- Sidebar content -->
```

## Forms and User Input

### Input Types Used
- `type="text"`: Name field
- `type="email"`: Email validation
- `type="tel"`: Phone number
- `type="submit"`: Form submission

### Form Validation
```html
<input type="email" name="email" required>
```
- `required`: Makes field mandatory
- `type="email"`: Validates email format
- `placeholder`: Shows example text

## Best Practices

### 1. Accessibility
```html
<!-- Good -->
<img src="logo.jpg" alt="DriveXpert Logo">

<!-- Bad -->
<img src="logo.jpg">
```

### 2. SEO Optimization
```html
<!-- Good -->
<h1>Welcome to DriveXpert Driving School</h1>
<h2>Our Services</h2>
<h3>Adult Lessons</h3>

<!-- Bad -->
<div class="main-title">Welcome to DriveXpert</div>
```

### 3. Semantic Structure
```html
<!-- Good -->
<section id="services">
    <h2>Our Services</h2>
    <div class="service-card">
        <h3>Service Title</h3>
        <p>Service description</p>
    </div>
</section>

<!-- Bad -->
<div class="services">
    <div class="title">Our Services</div>
    <div class="card">
        <div class="card-title">Service Title</div>
        <div class="card-text">Service description</div>
    </div>
</div>
```

## Common HTML Tags

### Text Elements
```html
<h1> to <h6>    <!-- Headings -->
<p>              <!-- Paragraphs -->
<span>           <!-- Inline text -->
<strong>         <!-- Bold text -->
<em>             <!-- Italic text -->
<br>             <!-- Line break -->
```

### Links and Media
```html
<a href="...">   <!-- Links -->
<img src="...">  <!-- Images -->
<video>          <!-- Videos -->
<audio>          <!-- Audio -->
```

### Lists
```html
<ul>             <!-- Unordered list -->
<ol>             <!-- Ordered list -->
<li>             <!-- List item -->
```

### Forms
```html
<form>           <!-- Form container -->
<input>          <!-- Input fields -->
<textarea>       <!-- Multi-line text -->
<select>         <!-- Dropdown -->
<button>         <!-- Buttons -->
<label>          <!-- Form labels -->
```

### Containers
```html
<div>            <!-- Block container -->
<span>           <!-- Inline container -->
<section>        <!-- Content section -->
<article>        <!-- Self-contained content -->
<header>         <!-- Header content -->
<footer>         <!-- Footer content -->
<nav>            <!-- Navigation -->
<main>           <!-- Main content -->
<aside>          <!-- Sidebar content -->
```

## HTML Validation

### Why Validate HTML?
- **Cross-browser compatibility**
- **Accessibility compliance**
- **SEO optimization**
- **Professional standards**

### Online Validators
- W3C HTML Validator
- HTML5 Validator
- Browser Developer Tools

## Conclusion

HTML provides the foundation for your DriveXpert website. By using semantic elements, proper structure, and following best practices, you create a website that is:

- **Search engine friendly**
- **Accessible to all users**
- **Easy to maintain**
- **Professional and reliable**

The HTML structure of your DriveXpert website follows modern web standards and provides a solid foundation for CSS styling and JavaScript functionality. 