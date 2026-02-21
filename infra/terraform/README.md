# Terraform: Personal Website

This module provisions:
- S3 + CloudFront for the frontend
- ECS Fargate + ALB for the FastAPI backend
- ECR repository for container images

## Prerequisites
- AWS CLI configured
- Terraform >= 1.6
- Docker for building the backend image

## First-time setup
1. Choose a globally unique S3 bucket name.
2. Create a terraform.tfvars file with at least:

```
frontend_bucket_name = "your-unique-bucket-name"
owner                = "your-name"
```

3. Initialize and apply:

```
terraform init
terraform plan
terraform apply
```

## Build and push the backend image
After apply, use the ECR URL from outputs:

```
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin <ECR_URL>

cd ../../backend

docker build -t <ECR_URL>:latest .

docker push <ECR_URL>:latest
```

Re-apply Terraform if you change task definitions.

## Update frontend deployment
Build the frontend and sync to S3:

```
cd ../../frontend
npm run build
aws s3 sync dist/ s3://<your-unique-bucket-name>
```

Then invalidate CloudFront cache:

```
aws cloudfront create-invalidation --distribution-id <DIST_ID> --paths "/*"
```

## Notes
- The backend ALB is HTTP-only by default. Add ACM + HTTPS for production.
- For a custom domain, create an ACM certificate in us-east-1 and update the
  CloudFront distribution.
- Default VPC is used for simplicity; move to a dedicated VPC for production.
