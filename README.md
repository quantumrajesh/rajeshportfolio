# Rajesh Choudhary - Digital Marketing Strategist Portfolio

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases expertise in digital marketing, performance marketing, and AI-driven campaigns.

## ✨ Features

- **Modern Design**: Clean, professional, and minimalist design with smooth animations
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Dark Mode**: Built-in dark/light theme toggle with system preference detection
- **Smooth Scrolling**: Seamless navigation with animated scroll behaviors
- **Performance Optimized**: Fast loading times with optimized assets and code splitting
- **SEO Ready**: Semantic HTML structure ready for SEO optimization
- **Contact Form**: Functional contact form with validation using React Hook Form
- **Interactive Animations**: Smooth animations powered by Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Create React App with CRACO
- **Font**: Inter and Poppins (Google Fonts)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd rajeshportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 📝 Customization Guide

### Personal Information
Edit the file `src/data/portfolio.ts` to update:
- Personal details (name, email, phone, location)
- Professional headline and tagline
- Skills and expertise
- Work experience
- Projects and case studies
- Certifications
- Social media links

### Colors & Branding
The color scheme is defined in `tailwind.config.js`:
- **Primary colors**: Professional blues (modify the `primary` color palette)
- **Accent colors**: Teals (modify the `accent` color palette)
- **Dark mode**: Automatic theme switching with custom dark variants

### Content Sections
Each section is a separate component in `src/components/sections/`:
- `Hero.tsx` - Landing section with introduction
- `About.tsx` - Professional summary and skills
- `Experience.tsx` - Work history timeline
- `Projects.tsx` - Case studies and portfolio pieces
- `Certifications.tsx` - Professional certifications
- `Contact.tsx` - Contact form and information

### Images & Assets
- Replace placeholder images in the `public/` directory
- Update project screenshots by modifying image URLs in `portfolio.ts`
- Add your professional headshot to replace the initials placeholder

### Styling Customization
- Global styles: `src/index.css`
- Component styles: Individual component files use Tailwind classes
- Custom components: Defined in the `@layer components` section of `index.css`

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── sections/        # Main page sections
│   ├── Header.tsx       # Navigation header
│   └── Footer.tsx       # Site footer
├── data/
│   └── portfolio.ts     # All portfolio content and data
├── hooks/
│   └── useDarkMode.ts   # Dark mode functionality
├── utils/
│   └── smoothScroll.ts  # Scroll utilities and animations
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Deployment

This project can be deployed to various platforms:

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop the `build/` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the deployment prompts

### Other Platforms
The `build/` folder contains static assets that can be deployed to any static hosting service.

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

If you have questions about customizing this portfolio:
- Email: rach101201@gmail.com
- LinkedIn: [linkedin.com/in/rach101](https://linkedin.com/in/rach101)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Built with Create React App and React ecosystem
- Icons provided by Lucide React
- Fonts by Google Fonts
