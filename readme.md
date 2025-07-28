# Full Stack User Management App

This is a simple full-stack CRUD (Create, Read, Update, Delete) application for managing **Users**.

Built with:

- 🌐 **Frontend**: React
- 🔧 **Backend**: Spring Boot
- 💾 **Database**: MySQL

---

## 🚀 Features

- Add, view, update, and delete users
- RESTful API with Spring Boot
- Axios for API communication
- Cross-Origin support (CORS) for frontend/backend interaction

---

## 📁 Project Structure

Project/
│
├── backend/ (Spring Boot)
│ ├── controller/ → UserController.java
│ ├── model/ → User.java
│ ├── repository/ → UserRepository.java
│ └── UserAppApplication.java
│
└── frontend/ (React)
├── components/
│ └── UserList.jsx
├── App.js
└── index.js

yaml
Copy
Edit

---

## 🔧 Backend Setup (Spring Boot)

### ✅ Prerequisites

- Java 17+
- Maven
- MySQL

### ⚙️ Steps

1. **Create the MySQL database:**
   ```sql
   CREATE DATABASE userapp;
Update application.properties:

ini
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/userapp
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Run the backend:

bash
Copy
Edit
cd backend/
mvn spring-boot:run
The backend server will start at:
http://localhost:8080

💻 Frontend Setup (React)
✅ Prerequisites
Node.js & npm installed

⚙️ Steps
Install dependencies:

bash
Copy
Edit
cd frontend/
npm install
Run the React app:

bash
Copy
Edit
npm start
The frontend will start at:
http://localhost:3000

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
POST	/api/users	Create new user
GET	/api/users/{id}	Get user by ID
PUT	/api/users/{id}	Update user
DELETE	/api/users/{id}	Delete user

⚙️ Technologies Used
Frontend: React, Axios

Backend: Spring Boot, Spring Data JPA

Database: MySQL

🙋‍♂️ Author
Faizal Amaan
Final-year BSc Software Engineering student at SLIIT