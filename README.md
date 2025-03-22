# 📝 Task Management App

A simple yet effective **Task Management App** built using **React.js, Node.js, Express.js, and MongoDB**.  
This app allows users to **add, edit, delete, and mark tasks as completed or pending**.

## 🚀 Features

- **Add, Edit, and Delete tasks**
- **Mark tasks as Pending or Completed**
- **Fetch tasks from the backend**
- **Responsive UI with Tailwind CSS**
- **REST API with Node.js & Express.js**
- **MongoDB for task storage**

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (via Mongoose)  
- **Version Control:** Git & GitHub  

```

## ⚡ Installation Guide

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/SurajIngale/Task-Management-App-.git
cd task-management-app
```

### 2️⃣ Setup Backend

```sh
cd backend
npm install

```
Add Your MongoDb url in /db.js


Then, start the backend server:

```sh
npm start
```

### 3️⃣ Setup Frontend

```sh
cd ../frontend
npm install
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint       | Description         |
|--------|--------------|--------------------|
| GET    | `/api/tasks` | Fetch all tasks    |
| POST   | `/api/tasks` | Add a new task     |
| PUT    | `/api/task`  | Edit task & status |
| DELETE | `/api/tasks/:id` | Delete a task |
