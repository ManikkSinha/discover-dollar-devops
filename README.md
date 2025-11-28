# Discover Dollar DevOps Assignment – Clean Scaffold

This repo is prepared as a clean DevOps scaffold.

## What you still need to add manually

1. Put **company's Angular app code** inside `frontend/` (same level as Dockerfile).
2. Put **company's Node/Express backend code** inside `backend/` (same level as Dockerfile).

After that, you can:

- Initialize git, push to GitHub
- Configure Docker Hub + CI/CD
- Deploy on your VM
CI Trigger Test
## ✅ CI/CD Status

- GitHub Actions workflow configured: `.github/workflows/deploy.yml`
- Pipeline runs on every push to the `main` branch.
- Verified runs:
  - `Initial commit - MEAN app with DevOps setup`
  - `Fix Angular build hang by using dev server in Docker`
  - `Fix MongoDB connection for Docker`

These runs successfully executed the CI pipeline steps (checkout, Docker login, build and push images). Screenshots of the workflow runs and logs are attached in the repository.
