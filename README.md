# DriveXpert Website

A professional, responsive website for DriveXpert driving services.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, mobile navigation, contact forms
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized CSS and JavaScript for performance

## 📁 File Structure

```
drive_xpert/
├── index.html          # Main homepage
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── images/             # Image assets (create this folder)
│   ├── hero-car.jpg
│   ├── about-us.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   └── video-poster.jpg
├── videos/             # Video assets (create this folder)
│   └── drivexpert-intro.mp4
└── README.md           # This file
```

## 🖼️ Required Images

You'll need to add the following images to the `images/` folder:

1. **hero-car.jpg** - Main hero image (recommended: 1200x800px)
2. **about-us.jpg** - About section image (recommended: 600x400px)
3. **gallery-1.jpg** - Gallery image 1 (recommended: 400x300px)
4. **gallery-2.jpg** - Gallery image 2 (recommended: 400x300px)
5. **gallery-3.jpg** - Gallery image 3 (recommended: 400x300px)
6. **gallery-4.jpg** - Gallery image 4 (recommended: 400x300px)
7. **video-poster.jpg** - Video thumbnail (recommended: 800x450px)

## 🎥 Required Videos

Add your video file to the `videos/` folder:
- **drivexpert-intro.mp4** - Introduction video (recommended: 1920x1080px, max 50MB)

## 🚀 Next Steps to Go Live

### 1. Choose a Hosting Provider

**Recommended Options:**

#### A. Netlify (Free & Easy)
- Go to [netlify.com](https://netlify.com)
- Sign up for a free account
- Drag and drop your website folder to deploy
- Get a free subdomain (e.g., your-site.netlify.app)

#### B. Vercel (Free & Fast)
- Go to [vercel.com](https://vercel.com)
- Sign up and connect your GitHub account
- Upload your website files
- Get instant deployment

#### C. GitHub Pages (Free)
- Create a GitHub repository
- Upload your website files
- Enable GitHub Pages in repository settings

#### D. Traditional Hosting
- **GoDaddy Hosting** (since you have domain there)
- **Bluehost**
- **HostGator**
- **SiteGround**

### 2. Connect Your Domain (drivexpert.co.uk)

#### If using Netlify/Vercel:
1. Deploy your website first
2. Go to your hosting dashboard
3. Add custom domain: `drivexpert.co.uk`
4. Update DNS settings in GoDaddy:
   - Add CNAME record: `www` → `your-site.netlify.app`
   - Add A record: `@` → `75.2.60.5` (Netlify's IP)

#### If using GoDaddy Hosting:
1. Upload files via File Manager or FTP
2. Domain is already connected
3. Update DNS if needed

### 3. DNS Configuration in GoDaddy

Log into your GoDaddy account and update DNS settings:

```
Type    Name    Value
A       @       [Your hosting IP]
CNAME   www     drivexpert.co.uk
```

### 4. SSL Certificate

Most modern hosting providers offer free SSL certificates:
- **Netlify/Vercel**: Automatic SSL
- **GoDaddy**: Purchase SSL certificate or use Let's Encrypt
- **Other hosts**: Check hosting provider's SSL options

## 📝 Customization Guide

### Update Content
1. **Company Information**: Edit text in `index.html`
2. **Contact Details**: Update phone, email, address
3. **Services**: Modify service descriptions
4. **Images**: Replace placeholder images with your own

### Update Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --text-color: #1f2937;
}
```

### Add More Pages
1. Create new HTML files (e.g., `services.html`, `about.html`)
2. Link them in the navigation
3. Copy the header and footer from `index.html`

## 🔧 Technical Details

- **HTML5**: Semantic markup for SEO
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: Google Fonts (Inter)
- **Icons**: Font Awesome 6
- **Responsive**: Mobile-first design approach

## 📱 Testing

Before going live, test your website:
1. **Desktop**: Chrome, Firefox, Safari, Edge
2. **Mobile**: iOS Safari, Android Chrome
3. **Tablet**: iPad, Android tablets
4. **Speed**: Use Google PageSpeed Insights
5. **SEO**: Check meta tags and structure

## 🎯 SEO Optimization

The website includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Fast loading times
- Mobile-friendly design

## 📞 Support

For technical support or customization:
- Check hosting provider documentation
- Review browser developer tools for errors
- Test on multiple devices and browsers

## 🚀 Launch Checklist

- [ ] Add all required images
- [ ] Add video file
- [ ] Update contact information
- [ ] Choose hosting provider
- [ ] Deploy website
- [ ] Connect domain
- [ ] Set up SSL certificate
- [ ] Test on multiple devices
- [ ] Check loading speed
- [ ] Verify contact form works
- [ ] Test all links and navigation

---

**Good luck with your DriveXpert website! 🚗✨**
