import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


def _parse_origins(value: str) -> list[str]:
    return [origin.strip() for origin in value.split(',') if origin.strip()]


app = FastAPI(
    title="Personal Website API",
    version="0.1.0",
)

allowed_origins = _parse_origins(
    os.getenv("ALLOWED_ORIGINS", "http://localhost:5173")
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root() -> dict:
    return {
        "status": "ok",
        "service": "personal-website-api",
    }


@app.get("/health")
async def health() -> dict:
    return {"status": "healthy"}


@app.get("/api/highlights")
async def highlights() -> dict:
    return {
        "highlights": [
            "AWS ECS deployment",
            "FastAPI backend",
            "Terraform infrastructure",
        ]
    }
