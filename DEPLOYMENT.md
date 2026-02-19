# 🚀 Deployment Guide

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/karan766/portfolio)

## Manual Deployment Steps

### 1. **Environment Setup**
```bash
# Copy environment variables
cp .env.example .env.local

# Add your actual values:
# - Google Analytics ID
# - Site URL
# - Any API keys
```

### 2. **Build & Test Locally**
```bash
# Install dependencies
npm install

# Type check
npm run type-check

# Build for production
npm run build

# Test production build
npm run preview
```

### 3. **Deploy to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 4. **Deploy to Netlify**
```bash
# Build command: npm run build
# Publish directory: .next
# Node version: 18.x
```

### 5. **Deploy to Other Platforms**

#### **Docker Deployment**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### **Static Export (GitHub Pages)**
```bash
# Add to next.config.mjs:
# output: 'export'
# trailingSlash: true
# images: { unoptimized: true }

npm run build
```

## 🔧 Production Checklist

- [ ] Environment variables configured
- [ ] Google Analytics ID added
- [ ] Social media links updated
- [ ] Contact information verified
- [ ] Images optimized (WebP/AVIF)
- [ ] SEO metadata complete
- [ ] Error pages tested
- [ ] Performance metrics checked
- [ ] Security headers configured
- [ ] SSL certificate active

## 📊 Performance Targets

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🔍 Monitoring

After deployment, monitor:
- Core Web Vitals in Google Search Console
- Analytics in Google Analytics
- Error tracking (if Sentry configured)
- Uptime monitoring

## 🛠️ Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
npm run clean
npm install
npm run build
```

### Performance Issues
- Check bundle size with `npm run build:analyze`
- Optimize images in `/public` folder
- Review lazy loading implementation

### SEO Issues
- Verify sitemap at `/sitemap.xml`
- Check robots.txt at `/robots.txt`
- Test structured data with Google's Rich Results Test