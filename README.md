# Personal Website

React + FastAPI personal website deployed on AWS.

## Stack
- Frontend: React + Vite
- Backend: FastAPI (Python)
- Infra: Terraform + AWS (S3, CloudFront, ECS Fargate, ALB, ECR)

## Project structure
```
frontend/    # React app
backend/     # FastAPI service
infra/       # Terraform
```

## Local development
Frontend:
```
cd frontend
npm install
npm run dev
```

Backend:
```
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Deployment
- Terraform setup: `infra/terraform/README.md`
- Build frontend: `npm run build` and sync to S3
- Build backend: Docker image to ECR, ECS service points to it

## Customize content
Edit `frontend/src/App.jsx` to update sections, projects, and contact details.
