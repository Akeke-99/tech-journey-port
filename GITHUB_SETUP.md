# GitHub setup for the portfolio

This project is prepared for GitHub Pages as a personal site.

## Recommended repository name

Create this repository under the GitHub account `Akeke-99`:

`Akeke-99.github.io`

Keep it public. Do not add a README, `.gitignore`, or license during repository creation because this project already contains those files.

## Upload the project

After creating the empty repository, upload the contents of this folder (not the outer ZIP folder) and commit them to the `main` branch.

The included GitHub Actions workflow will build the TanStack Start app with static prerendering and deploy `.output/public` to GitHub Pages.

## Enable Pages

On GitHub:

1. Open the repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually from **Actions**).

The workflow is already included at `.github/workflows/deploy.yml`.

## Local development

```sh
npm install
npm run dev
```

The portfolio can then be reviewed locally before pushing changes.
