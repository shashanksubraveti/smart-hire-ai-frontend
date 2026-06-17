# SmartHire AI Frontend

SmartHire AI Frontend is the Angular user interface for the SmartHire AI resume analysis platform. It allows users to upload a resume PDF, paste a job description, and receive an AI-generated resume match analysis from the Spring Boot backend.

This frontend connects to the SmartHire AI backend, which extracts resume text using Apache PDFBox and analyzes the resume against the job description using a local Ollama LLM.

---

## Project Overview

SmartHire AI helps candidates and job seekers quickly understand how well their resume matches a specific job description.

The frontend provides a simple interface where users can:

* Upload a resume PDF
* Paste a job description
* Submit the resume for analysis
* View AI-generated results including:

  * Match score
  * Summary
  * Strengths
  * Missing skills
  * Recommendation

---

## Tech Stack

* Angular
* TypeScript
* HTML
* CSS
* Angular Forms
* Angular HttpClient
* Spring Boot backend integration
* Ollama local LLM integration through backend

---

## Architecture

```text
Angular Frontend
        |
        v
Spring Boot Backend
        |
        v
Apache PDFBox extracts resume text
        |
        v
Ollama local LLM analyzes resume and job description
        |
        v
Angular displays AI analysis result
```

---

## Local Application URLs

```text
Angular Frontend:     http://localhost:4200
Spring Boot Backend:  http://localhost:8080
Ollama Server:        http://localhost:11434
```

---

## Features

* Resume PDF upload
* Job description text input
* Analyze Resume button
* Loading state while analysis is running
* AI analysis result display
* Error handling for failed backend requests
* Clean and simple responsive UI

---

## Prerequisites

Before running this frontend, make sure the following are installed:

* Node.js
* npm
* Angular CLI
* Java 17 or higher for backend
* Ollama for local LLM
* SmartHire AI backend project

Check Node and npm:

```bash
node -v
npm -v
```

Check Angular CLI:

```bash
ng version
```

---

## Backend Requirement

This frontend requires the SmartHire AI backend to be running.

Backend endpoint used by the frontend:

```text
POST http://localhost:8080/api/resume/analyze
```

The backend must support CORS for Angular:

```java
@CrossOrigin(origins = "http://localhost:4200")
```

---

## Ollama Requirement

The backend uses Ollama as the local AI model provider.

Start or verify Ollama:

```bash
curl http://localhost:11434
```

Expected output:

```text
Ollama is running
```

Check available models:

```bash
ollama list
```

Run the model used by the backend:

```bash
ollama run llama3.2:1b
```

---

## Installation

Clone the frontend repository:

```bash
git clone https://github.com/shashanksubraveti/smart-hire-ai-frontend.git
```

Go into the project folder:

```bash
cd smart-hire-ai-frontend
```

Install dependencies:

```bash
npm install
```

If dependency resolution issues occur, run:

```bash
npm install --legacy-peer-deps
```

---

## Running the Frontend

Start the Angular development server:

```bash
ng serve
```

Open the browser:

```text
http://localhost:4200
```

---

## Demo Steps

To demonstrate the complete application:

### 1. Start Ollama

```bash
ollama run llama3.2:1b
```

Or verify it is running:

```bash
curl http://localhost:11434
```

### 2. Start Spring Boot Backend

Open the backend project and run:

```text
SmartHireAiApplication
```

Expected backend output:

```text
Tomcat started on port 8080
Started SmartHireAiApplication
```

### 3. Start Angular Frontend

```bash
cd smart-hire-ai-frontend
ng serve
```

Open:

```text
http://localhost:4200
```

### 4. Use the Application

* Upload a resume PDF
* Paste a job description
* Click Analyze Resume
* View the AI analysis result

---

## Sample Job Description for Testing

```text
AWS Java Developer with experience in Java, Spring Boot, REST APIs, SQL, Git, Maven, and AWS services. The role requires building backend services, integrating APIs, debugging production issues, and deploying applications to cloud environments. Knowledge of microservices, CI/CD, Docker, and Agile development is preferred.
```

---

## API Request Flow

The Angular frontend sends a multipart form-data request to the backend.

Form fields:

```text
resume          PDF file
jobDescription  Text input
```

Backend API:

```text
POST http://localhost:8080/api/resume/analyze
```

Expected response:

```text
Match Score: 82%

Summary:
Candidate fit summary...

Strengths:
- Strength 1
- Strength 2

Missing Skills:
- Missing skill 1
- Missing skill 2

Recommendation:
Final recommendation...
```

---

## Project Structure

```text
smart-hire-ai-frontend/
├── src/
│   ├── app/
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── public/
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## Current Version

### Version 2

This version adds the Angular frontend to the SmartHire AI project.

Completed features:

* Angular project setup
* Resume upload UI
* Job description input UI
* Spring Boot API integration
* Result display section
* Loading state
* Basic error handling
* GitHub frontend repository setup

---

## Future Enhancements

Possible future improvements:

* Better UI design with Angular Material
* Drag-and-drop resume upload
* Progress indicator while analyzing
* Download analysis as PDF
* Store previous analysis history
* Candidate dashboard
* Recruiter dashboard
* Authentication and login
* Resume improvement suggestions
* Multiple job description comparison
* Deployment to cloud

---

## Related Repository

Backend repository:

```text
https://github.com/shashanksubraveti/smart-hire-ai
```

Frontend repository:

```text
https://github.com/shashanksubraveti/smart-hire-ai-frontend
```

---

## Author

Developed by Shashank Subraveti as a full-stack AI portfolio project using Angular, Spring Boot, PDFBox, and Ollama.

---

## Summary

SmartHire AI Frontend provides a clean Angular interface for interacting with the SmartHire AI backend. It helps candidates analyze resume-job fit using a local AI model, making the application free to run locally without paid AI API keys.
