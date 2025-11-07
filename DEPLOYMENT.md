# Deployment Guide - Pralumex Website

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Pralumex website"
   git push origin main
   ```

2. **Go to [Vercel Dashboard](https://vercel.com)**
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your `pralumex-website` repository
   - Vercel will auto-detect it as a Vite project
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Login to your Vercel account
   - Link to existing project or create new one
   - Accept default settings (Vercel auto-detects Vite)

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Project Configuration

### Build Settings (Auto-configured by Vercel)
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables
Currently, no environment variables are needed since there's no backend.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Custom Domain Setup

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys to production
- Pull requests create preview deployments
- No manual deployment needed!

## Tech Stack

- **React 18.3** - UI framework
- **Vite 5.4** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router 6** - Client-side routing
- **shadcn/ui** - Component library

