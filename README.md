# Portfolio Design - Virender Kumar

A premium, modern portfolio website showcasing projects, skills, and professional experience with stunning visual effects and interactive elements.

## 🌟 Features

### Design & Aesthetics
- **Glassmorphism UI** - Premium frosted glass effects throughout the interface
- **Dark/Light Theme Toggle** - Seamless theme switching with neon green (dark) and neon purple (light) accents
- **Custom Magnetic Cursor** - Interactive cursor that enhances user engagement
- **Smooth Animations** - Carefully crafted animations for enhanced user experience
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Interactive Sections
- **Dynamic Landing Page** - Animated "HELLO" SVG greeting with typewriter effect
- **About Section** - Masonry-style collage layout showcasing education and experience
- **Skills Showcase** - Diamond-pattern hexagonal skill icons with 1-2-3-4-3-2 layout
- **Projects Display** - Filterable project cards with glassmorphism effects
- **Interactive Terminal** - Functional terminal interface with custom commands
- **Contact Section** - Contact form with email and message input boxes
- **Music Player** - Integrated audio player with hover expand effect

### Technical Features
- Pure HTML, CSS, and vanilla JavaScript
- No framework dependencies
- SEO optimized with proper meta tags
- Fast loading with optimized assets
- Accessible and semantic HTML

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Fira Code, Ubuntu, Playfair Display, and more)
- **Icons**: Devicon, Custom SVG icons
- **Design**: Glassmorphism, Custom CSS animations

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server (e.g., Python's http.server, Live Server extension)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/viren849/portfolio-design.git
   cd portfolio-design
   ```

2. **Open locally**
   
   Simply open `index.html` in your browser, or use a local server:

   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8080
   
   # Then visit http://localhost:8080
   ```

   **Using Node.js (http-server):**
   ```bash
   npx http-server -p 8080
   ```

   **Using VS Code Live Server:**
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
portfolio-design/
├── index.html              # Main HTML file
├── static/
│   ├── css/
│   │   ├── style.css      # Main styles with theming
│   │   └── mobile.css     # Mobile responsive styles
│   ├── js/
│   │   └── index.js       # JavaScript functionality
│   ├── images/
│   │   ├── collage/       # About section images
│   │   ├── projects/      # Skill and project icons
│   │   └── other/         # Miscellaneous assets
│   └── files/
│       └── resume.pdf     # Resume file
└── README.md              # This file
```

## 🎨 Customization

### Updating Personal Information

1. **Name and Title**: Edit the text in `index.html` around line 30
2. **About Section**: Update content in the about section (lines 168-240)
3. **Resume**: Replace `/static/files/resume.pdf` with your own resume
4. **Contact Links**: Update social media URLs in the reach-out section (lines 453-475)

### Adding Projects

Projects are dynamically loaded. Add new project data in `index.js` in the projects array and update the `getProjects()` function.

### Customizing Colors

Theme colors are defined in CSS variables in `style.css` (lines 10-47):
- Dark theme: `--accent-color: #00ff66` (neon green)
- Light theme: `--accent-color: #6200ee` (neon purple)

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository and deploy

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select your branch and `/root` as the source
4. Your site will be available at `https://yourusername.github.io/portfolio-design`

## 🎯 Features Breakdown

### Terminal Commands
Type `help` in the terminal to see available commands:
- `about` - Display information about me
- `skills` - List technical skills
- `projects` - Show projects
- `contact` - Display contact information
- `clear` - Clear terminal
- `theme` - Toggle dark/light mode

### Contact Form
The contact form uses a `mailto:` link approach. When submitted:
- Email validation ensures proper format
- Message validation ensures content is provided
- Opens the user's default email client with pre-filled data

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Virender Kumar**
- GitHub: [@viren849](https://github.com/viren849)
- LinkedIn: [kumar-viren](https://www.linkedin.com/in/kumar-viren/)
- Email: Contact via the portfolio form

## 🙏 Acknowledgments

- Google Fonts for typography
- Devicon for skill icons
- Inspiration from modern web design trends

---

Made with 💚 by Virender Kumar
