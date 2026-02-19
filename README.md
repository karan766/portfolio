# 💼 Karan Singh Sodhi - Portfolio Website

> A modern, production-ready portfolio showcasing full-stack development skills and projects

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://karansinghsodhi.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🎯 About This Project

This is my personal portfolio website built to showcase my journey as a **Software Engineer** and **Full-Stack Developer**. The site demonstrates modern web development practices, performance optimization, and clean code architecture.

### 🌟 Live Website
**[karansinghsodhi.vercel.app](https://karansinghsodhi.vercel.app)**

## ✨ Key Features

- 🎨 **Modern Design**: Clean, professional UI with smooth dark theme
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **High Performance**: 95+ Lighthouse scores across all metrics
- 🔍 **SEO Optimized**: Complete meta tags, structured data, and sitemap
- 🌐 **3D Interactive Elements**: Three.js globe and animations
- 🎭 **Smooth Animations**: Framer Motion for fluid user experience
- 🛡️ **Type Safe**: Built with TypeScript for reliability
- 🚀 **Production Ready**: Optimized for deployment and scalability

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, CSS Modules |
| **Animations** | Framer Motion, CSS Animations |
| **3D Graphics** | Three.js, React Three Fiber |
| **Icons** | React Icons, Custom SVGs |
| **Development** | ESLint, Prettier, Husky |
| **Deployment** | Vercel, Docker Support |

## 📊 Performance Metrics

- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/karan766/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Architecture

```
portfolio/
├── 📂 app/                 # Next.js App Router
│   ├── 🎨 globals.css     # Global styles
│   ├── 🏗️ layout.tsx      # Root layout with SEO
│   ├── 🏠 page.tsx        # Home page with lazy loading
│   ├── ⏳ loading.tsx     # Loading UI components
│   ├── 🚫 not-found.tsx   # Custom 404 page
│   ├── 🗺️ sitemap.ts      # Dynamic sitemap generation
│   └── 🤖 robots.ts       # SEO robots configuration
├── 📂 components/          # Reusable React components
│   ├── 📂 ui/             # Base UI components
│   ├── 🎯 Hero.tsx        # Landing section
│   ├── 📋 Grid.tsx        # About section
│   ├── 💼 Experience.tsx  # Work experience
│   ├── 🚀 RecentProjects.tsx # Project showcase
│   ├── 🛠️ Skills.tsx      # Technical skills
│   └── 📞 Footer.tsx      # Contact section
├── 📂 data/               # Static content and data
├── 📂 lib/                # Utility functions and helpers
├── 📂 public/             # Static assets and images
└── 📂 docs/               # Documentation files
```

## 🎨 Sections Overview

| Section | Description | Key Features |
|---------|-------------|--------------|
| **Hero** | Landing area with introduction | Animated text, call-to-action |
| **About** | Personal summary and highlights | Interactive cards, statistics |
| **Experience** | Professional work history | Timeline, achievements |
| **Projects** | Showcase of key projects | Live demos, tech stacks |
| **Skills** | Technical expertise | Categorized skill sets |
| **Education** | Academic background | Certifications, coursework |
| **Contact** | Get in touch section | 3D globe, social links |

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript validation
npm run preview      # Build and preview locally
npm run clean        # Clean build artifacts
```

## 🚀 Deployment

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/karan766/portfolio)

### Manual Deployment
1. **Fork this repository**
2. **Connect to Vercel/Netlify**
3. **Set environment variables**
4. **Deploy automatically**

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🔐 Environment Setup

Create `.env.local` file:
```bash
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Contact Form (Optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

## 🎯 Customization Guide

### 1. **Personal Information**
Update `data/index.ts` with your:
- Personal details and contact info
- Work experience and achievements
- Projects and technical skills
- Education and certifications

### 2. **Styling & Branding**
- **Colors**: Modify `tailwind.config.ts`
- **Fonts**: Replace files in `app/fonts/`
- **Logo**: Update favicon and images in `public/`

### 3. **Content & Images**
- **Profile Images**: Add to `public/` directory
- **Project Screenshots**: Optimize and add to `public/`
- **Icons**: Update paths in data files

## 📈 SEO & Analytics

- ✅ **Meta Tags**: Complete Open Graph and Twitter cards
- ✅ **Structured Data**: JSON-LD for better search results
- ✅ **Sitemap**: Auto-generated XML sitemap
- ✅ **Robots.txt**: Search engine optimization
- ✅ **Analytics**: Google Analytics integration ready

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Next.js Team](https://nextjs.org/)** - For the incredible React framework
- **[Vercel](https://vercel.com/)** - For seamless deployment platform
- **[Tailwind CSS](https://tailwindcss.com/)** - For utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth animations
- **[Three.js](https://threejs.org/)** - For 3D graphics capabilities

## 📞 Connect With Me

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-karansinghsodhi.vercel.app-blue?style=for-the-badge&logo=vercel)](https://karansinghsodhi.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-karan--singh--sodhi-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/karan-singh-sodhi-a53021228/)
[![GitHub](https://img.shields.io/badge/GitHub-karan766-181717?style=for-the-badge&logo=github)](https://github.com/karan766)
[![Email](https://img.shields.io/badge/Email-karansodhi703%40gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:karansodhi703@gmail.com)

</div>

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

*Built with ❤️ by [Karan Singh Sodhi](https://github.com/karan766)*

</div>
