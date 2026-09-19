# Muthu Harish - Portfolio

Academic and professional portfolio of Muthu Harish — MCA scholar, Python developer, Data Analytics & AI specialist. Built with React, Vite, and Tailwind CSS.

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages whenever changes are pushed to `main` or `master`.

### One-Time Setup in GitHub

1. Push this repository to GitHub.
2. Go to your repository on GitHub.
3. Navigate to **Settings** > **Pages** (in the left sidebar).
4. Under **Build and deployment** > **Source**, select **GitHub Actions**.
5. When you push a commit to `main` (or `master`), the workflow runs automatically.
6. Once complete, your site will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
