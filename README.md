# Pralumex Website

Service-Driven Plastic Recycling Since 1987 - A modern, responsive website for Pralumex, Inc.

## 🚀 Quick Start

### Prerequisites

- **Conda** (Miniconda or Anaconda) - [Install Conda](https://docs.conda.io/en/latest/miniconda.html)
- **Git** - [Install Git](https://git-scm.com/downloads)

### Setup with Conda Environment

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/pralumex-website.git
cd pralumex-website
```

#### 2. Create and Activate Conda Environment

```bash
# Create the conda environment from environment.yml
conda env create -f environment.yml

# Activate the environment
conda activate pralumex-website
```

#### 3. Install Project Dependencies

```bash
# Install all npm packages
npm install
```

#### 4. Start Development Server

```bash
# Start the dev server (runs on http://localhost:8080)
npm run dev
```

Your website will be available at **http://localhost:8080** 🎉

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## 🔧 Conda Environment Management

```bash
# Activate environment
conda activate pralumex-website

# Deactivate environment
conda deactivate

# Remove environment (if needed)
conda env remove -n pralumex-website

# Update environment from environment.yml
conda env update -f environment.yml --prune

# Export environment
conda env export > environment.yml
```

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite 5.4** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **React Router 6** - Client-side routing
- **Lucide React** - Icon library

## 📁 Project Structure

```
pralumex-website/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Mission.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── assets/           # Images and static files
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── environment.yml       # Conda environment config
├── package.json          # npm dependencies
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy via Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects the Vite configuration
   - Click "Deploy"

3. **Auto-deployments:**
   - Every push to `main` automatically deploys
   - Pull requests create preview deployments

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🐛 Troubleshooting

### Conda environment not found
```bash
# Make sure conda is initialized
conda init bash  # or zsh, depending on your shell
# Restart terminal and try again
```

### Port 8080 already in use
```bash
# Kill the process using port 8080
lsof -ti:8080 | xargs kill -9
# Or change the port in vite.config.ts
```

### Module not found errors
```bash
# Make sure you're in the conda environment
conda activate pralumex-website
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📝 Development Workflow

1. **Activate conda environment:**
   ```bash
   conda activate pralumex-website
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```

3. **Make your changes** - The server auto-reloads

4. **Test production build:**
   ```bash
   npm run build
   npm run preview
   ```

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Pralumex, Inc.

## 📧 Contact

**Pralumex, Inc.**  
Service-Driven Plastic Recycling Since 1987

For more information, visit the Contact page on the website.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
