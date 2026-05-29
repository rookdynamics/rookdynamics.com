# rookdynamics.com

Static marketing site for Rook Dynamics. Plain HTML, no build step.

## Deploy
Hosted on DigitalOcean App Platform (free static tier). `.do/app.yaml`
declares the static site component. Pushes to `main` auto-deploy when DO
has access to this private repo.

## Local preview
Open index.html, or: python -m http.server 8080
