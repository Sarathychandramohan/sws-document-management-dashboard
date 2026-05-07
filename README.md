# SWS Document Management Dashboard

A modern MERN stack document management dashboard built for the SWS assessment.

The application supports:

- PDF document uploads
- Multiple file uploads
- Real-time upload progress tracking
- Document library management
- File download and delete
- Notification system (planned)
- Responsive dashboard UI

---

# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Hot Toast
- Socket.IO Client

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Socket.IO

---

# Project Structure

```text
sws-document-management-dashboard/
│
├── client/
│   ├── src/
│   └── public/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── .env
│   └── server.js
│
├── README.md
└── .gitignore
```

---

# Features Implemented

## Frontend

- Modern dashboard UI
- Upload section
- Upload queue UI
- Document library table
- Responsive layout

## Backend

- Express server setup
- MongoDB connection
- File upload APIs
- Local file storage
- File metadata storage using MongoDB

---

# Backend API Routes

## Upload Files

```http
POST /api/files/upload
```

Uploads one or multiple PDF files.

---

## Get All Files

```http
GET /api/files
```

Returns uploaded file metadata.

---

## Download File

```http
GET /api/files/download/:id
```

Downloads uploaded PDF.

---

## Delete File

```http
DELETE /api/files/:id
```

Deletes file from:

- MongoDB
- uploads folder

---

# Local Development Setup

# 1. Clone Repository

```bash
git clone https://github.com/Sarathychandramohan/sws-document-management-dashboard.git
```

---

# 2. Move Into Project

```bash
cd sws-document-management-dashboard
```

---

# 3. Setup Frontend

```bash
cd client
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 4. Setup Backend

Open new terminal:

```bash
cd server
npm install
```

---

# 5. Configure Environment Variables

Create:

```text
server/.env
```

Add:

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/sws_dashboard

JWT_SECRET=mysupersecretkey
```

---

# 6. Start MongoDB Locally

If MongoDB is installed:

```bash
mongod --dbpath D:\mongodb-data
```

---

# 7. Run Backend Server

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# Verify Backend

Open browser:

```text
http://localhost:5000
```

Expected response:

```json
{
  "success": true,
  "message": "SWS Document Management API Running"
}
```

---

# Testing APIs Using Postman

## Upload Files

### Method

```http
POST
```

### URL

```text
http://localhost:5000/api/files/upload
```

### Body

Choose:

```text
form-data
```

Add:

| KEY   | TYPE |
| ----- | ---- |
| files | File |

Upload one or multiple PDFs.

---

## Get Files

### Method

```http
GET
```

### URL

```text
http://localhost:5000/api/files
```

---

## Delete File

### Method

```http
DELETE
```

### URL

```text
http://localhost:5000/api/files/:id
```

---

## Download File

### Method

```http
GET
```

### URL

```text
http://localhost:5000/api/files/download/:id
```

---

# Current Development Status

## Completed

- Frontend dashboard UI
- Backend architecture
- MongoDB integration
- File upload APIs
- Local file storage
- Postman API testing

## Planned

- Frontend API integration
- Upload progress tracking
- Realtime notifications
- Socket.IO integration
- Notification center
- Deployment

---

# Git Workflow

Frequent commits are maintained during development:

```bash
git add .
git commit -m "meaningful message"
git push
```

---

# Author

Sarathy Chandramohan

GitHub Repository:

https://github.com/Sarathychandramohan/sws-document-management-dashboard
