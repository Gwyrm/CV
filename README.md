# Pierre Moreau - Resume Website

A modern, responsive portfolio website showcasing my experience as a Machine Learning Engineer and AI researcher.

## 🌐 Live Demo

Visit the live website: **[pierremoreau.myddns.me](https://pierremoreau.myddns.me)**

## Features

- **Responsive Design**: Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Multilingual Support**: Available in English and French with dynamic language switcher
- **Modern Glassmorphism UI**: Beautiful glass-effect navigation with backdrop blur
- **Smooth Animations**: Elegant scroll animations using AOS (Animate On Scroll) library
- **Interactive Elements**: Hover effects, animated skill bars, and smooth transitions
- **Project Showcase**: Dedicated section to highlight key projects with tech tags
- **Skills Visualization**: Interactive skill bars with animated progress indicators
- **Professional Timeline**: Visual representation of work experience with alternating layout
- **Contact Integration**: Multiple contact methods with hover animations
- **Mobile-First Design**: Hamburger menu and optimized mobile navigation

## Technologies Used

### Core Technologies
- **HTML5**: Semantic markup with modern standards
- **CSS3**: Advanced features including CSS Variables, Flexbox, Grid, and custom animations
- **Vanilla JavaScript**: ES6+ features for interactive functionality

### External Libraries & Fonts
- **AOS (Animate On Scroll)**: Smooth scroll-triggered animations
- **Font Awesome 6.4.0**: Professional iconography
- **Google Fonts (Inter)**: Modern, clean typography with multiple weights
- **CSS Variables**: Centralized theming system

### Design Features
- **Glassmorphism**: Modern glass-effect design elements
- **CSS Grid & Flexbox**: Advanced layout systems
- **Custom Animations**: Keyframe animations and transitions
- **Responsive Breakpoints**: Mobile (768px), Tablet (1024px), Desktop (1200px+)

## Sections

1. **Hero Section**: Introduction with animated call-to-action buttons
2. **About**: Personal information, background, and contact details
3. **Experience**: Professional timeline with detailed work history
4. **Projects**: Portfolio of featured projects with technology tags
5. **Skills**: Technical skills with animated progress bars
6. **Contact**: Multiple contact methods with interactive elements

## Getting Started

### Quick Start
Simply open `index.html` in your web browser to view the website.

### Language Versions
- **English**: `index.html` (default)
- **French**: `index-fr.html`

## Customization

### Theme & Colors
Colors can be customized in the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #1e293b;
    --secondary-color: #3b82f6;
    --accent-color: #06b6d4;
    /* ... more variables */
}
```

### Content Updates
- **English version**: Edit content directly in `index.html`
- **French version**: Edit content in `index-fr.html`
- **Personal information**: Update the about section and contact details
- **Projects**: Add more projects by copying the project card structure
- **Skills**: Modify skill categories and proficiency levels

### Animation Settings
AOS animations can be configured in `script.js`:
```javascript
AOS.init({
    duration: 600,    // Animation duration
    once: true,       // Animation triggers only once
    offset: 50        // Offset from trigger point
});
```

## Performance Features

- **Optimized CSS**: Efficient selectors and minimal reflows
- **Lazy Loading**: AOS animations load only when needed
- **Responsive Images**: Scalable design without heavy assets
- **Minimal JavaScript**: Clean, efficient code without external dependencies
- **CSS Variables**: Centralized theming for easy maintenance

### GitHub Pages Setup
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Fallbacks**: Graceful degradation for older browsers

## File Structure

```
CV/
├── index.html          # Main English version
├── index-fr.html       # French version
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
└── CNAME              # Custom domain configuration
```

## License

Feel free to use this template for your own portfolio website. Attribution appreciated but not required.
