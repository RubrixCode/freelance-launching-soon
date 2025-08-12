# Freelance - Launching Soon Page

A beautiful, responsive landing page built with Next.js and Tailwind CSS to announce the upcoming launch of the Freelance platform.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with gradient overlays
- **Performance**: Built with Next.js for optimal performance
- **Styling**: Tailwind CSS for consistent, beautiful styling
- **TypeScript**: Full type safety and better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📁 Project Structure

```
├── src/
│   └── app/
│       ├── page.tsx          # Main launching soon page
│       ├── layout.tsx        # Root layout with metadata
│       └── globals.css       # Global styles
├── public/
│   └── images/               # Image assets directory
│       └── README.md         # Asset requirements guide
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🎨 Required Assets

The following images need to be added to the `public/images/` directory:

1. **freelance-logo.png** - Main logo (96x96px recommended)
2. **launching-soon-background.png** - Background image
3. **wavy-pattern.png** - Decorative pattern (100x100px)

See `public/images/README.md` for detailed specifications.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd freelance-waiting-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your image assets to `public/images/`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Customization

### Colors and Styling
- Modify the gradient overlay in `src/app/page.tsx`
- Update Tailwind classes for different color schemes
- Adjust the decorative elements' positions and colors

### Content
- Update the title, subtitle, and description text
- Modify the logo and branding
- Change the background image

### Layout
- Adjust spacing and typography using Tailwind classes
- Modify the responsive breakpoints
- Customize the decorative elements

## 🌐 Deployment

This project is ready to deploy on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Built with ❤️ using Next.js and Tailwind CSS**
