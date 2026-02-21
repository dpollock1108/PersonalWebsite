variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name used for naming resources"
  type        = string
  default     = "personal-website"
}

variable "owner" {
  description = "Tag value for owner"
  type        = string
  default     = "your-name"
}

variable "frontend_bucket_name" {
  description = "Globally unique S3 bucket name for the frontend"
  type        = string
}

variable "backend_image_tag" {
  description = "Tag for the backend image"
  type        = string
  default     = "latest"
}

variable "backend_container_port" {
  description = "Container port for the backend"
  type        = number
  default     = 8000
}

variable "backend_cpu" {
  description = "CPU units for the ECS task"
  type        = number
  default     = 256
}

variable "backend_memory" {
  description = "Memory (MiB) for the ECS task"
  type        = number
  default     = 512
}

variable "backend_desired_count" {
  description = "Number of tasks to run"
  type        = number
  default     = 1
}

variable "allowed_origins" {
  description = "CORS allowed origins"
  type        = string
  default     = "http://localhost:5173"
}
