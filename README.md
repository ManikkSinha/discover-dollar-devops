# Discover Dollar – DevOps Internship Assignment  
**MEAN Stack Application Deployment using Docker, CI/CD, and Google Cloud Platform**

---

## 📌 Project Overview  
This project demonstrates the complete DevOps lifecycle for a full-stack MEAN (MongoDB, Express, Angular, Node.js) application. The application is fully containerized using Docker, deployed on a Google Cloud Platform (GCP) Ubuntu Virtual Machine using Docker Compose, and integrated with an automated CI/CD pipeline using GitHub Actions.

The main objective of this assignment was to:
- Containerize frontend and backend applications
- Deploy the complete stack on a cloud VM
- Automate Docker build and push using CI/CD
- Expose the application on a public IP using port 80

---

## 🏗️ System Architecture  

- **Frontend:** Angular  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **Containerization:** Docker & Docker Compose  
- **CI/CD:** GitHub Actions  
- **Cloud Platform:** Google Cloud Platform (Ubuntu VM)

---

## 📁 Repository Structure  

.
├── frontend/
│ └── Dockerfile
├── backend/
│ └── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .github/
│ └── workflows/
│ └── deploy.yml
├── Screenshots/
└── README.md

---

## 🚀 Deployment Implementation  

### 1️⃣ GitHub Repository Setup  
- Project source code pushed to GitHub  
- GitHub Actions workflow created for CI/CD  
- Docker Hub credentials stored securely using GitHub Secrets  

### 2️⃣ Docker Containerization  
- Separate Dockerfiles created for:
  - Frontend (Angular)
  - Backend (Node.js + Express)
- Multi-container setup created using Docker Compose  
- MongoDB deployed using official MongoDB Docker image  

### 3️⃣ Google Cloud Platform (GCP) Deployment  
- Ubuntu VM created on GCP  
- Docker and Docker Compose installed  
- Repository cloned on VM  
- Application deployed using:

```bash
docker-compose up -d