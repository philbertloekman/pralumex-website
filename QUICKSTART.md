# Quick Start Guide - Pralumex Website

## 🎯 Setup (First Time Only)

```bash
# 1. Create conda environment
conda env create -f environment.yml

# 2. Activate environment
conda activate pralumex-website

# 3. Install dependencies
npm install
```

## 🚀 Daily Development

```bash
# 1. Activate conda environment
conda activate pralumex-website

# 2. Start dev server
npm run dev

# 3. Open browser to http://localhost:8080
```

## ✅ Verify Setup

After creating the environment, verify everything is working:

```bash
conda activate pralumex-website
node --version    # Should show v24.x.x
npm --version     # Should show 11.x.x
npm run dev       # Should start the dev server
```

## 🛑 Stop Development Server

Press `Ctrl + C` in the terminal

## 📦 Other Useful Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Deactivate conda environment
conda deactivate
```

## 🆘 Troubleshooting

### "conda: command not found"
Install Conda from: https://docs.conda.io/en/latest/miniconda.html

### "CondaEnvironmentNotFoundError"
```bash
conda env create -f environment.yml
```

### Port 8080 already in use
```bash
# Kill the process
lsof -ti:8080 | xargs kill -9
```

### Packages not installing
```bash
conda activate pralumex-website
rm -rf node_modules package-lock.json
npm install
```

---

**That's it! You're ready to develop. 🎉**

For detailed information, see [README.md](./README.md)

