# Deployment Guide

This guide will help you deploy your Freelance launching soon page to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the platform created by the Next.js team and offers the best integration.

### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Next.js project
3. Deploy with one click

### Manual Deployment
```bash
npm install -g vercel
vercel
```

## 🌐 Netlify

### Steps:
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

## ☁️ AWS Amplify

### Steps:
1. Connect your GitHub repository to AWS Amplify
2. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy!

## 📱 Manual Deployment

### Build the Project
```bash
npm run build
npm run export  # If you want static export
```

### Upload to Any Hosting Service
- Upload the `.next` folder (or `out` folder if exported)
- Configure your hosting service to serve Next.js apps

## 🔧 Environment Variables

Currently, no environment variables are required. If you add any in the future, make sure to configure them in your hosting platform.

## 📊 Performance

- The page is optimized for Core Web Vitals
- Images are optimized with Next.js Image component
- CSS is automatically purged and optimized
- Ready for production use

## 🆘 Troubleshooting

### Common Issues:
1. **Build fails**: Make sure all dependencies are installed
2. **Images not loading**: Verify image paths in `public/images/`
3. **Styling issues**: Ensure Tailwind CSS is properly configured

### Support:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Open an issue in the GitHub repository
- Check your hosting platform's documentation
