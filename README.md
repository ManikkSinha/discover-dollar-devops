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

## ⚠️ Current Limitation  

Due to limited VM hardware resources, the Angular frontend runtime (`ng serve`) experiences performance instability on the cloud instance. However:

✅ Backend service is fully functional  
✅ MongoDB container is fully operational  
✅ Docker multi-container deployment is working  
✅ GitHub Actions CI/CD automation is implemented and verified  
✅ Cloud infrastructure & deployment process are completed  

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
└── README.md
