# 📚 TEACHSPACETOOLS  

Teachspace Tools is a **Spring Boot** and **Angular** application designed to manage professors, rooms, and their scheduling in an educational institution. It provides a **RESTful API** to perform CRUD operations and a user-friendly Angular-based frontend for seamless interaction:  
👨‍🏫 **Professors (Prof)** | 🏫 **Rooms (Salle)** | 📆 **Occupancy (Occuper)**  
The application integrates with a **PostgreSQL** database and includes **Swagger UI** for API documentation.

---

## ✨ FEATURES  

✅ **Professor Management**: Create, update, delete, and retrieve professors 👨‍🏫  
✅ **Room Management**: Handle room designations with CRUD operations 🏫  
✅ **Occupancy Scheduling**: Assign rooms to professors on specific dates 📅  
✅ **Angular Frontend**: A modern and interactive user interface 🌍
✅ **API Documentation**: Interactive Swagger UI 📜  
✅ **Error Handling**: Comprehensive exception handling and database constraints 🚦  

---

## 🛠️ TECH STACK  

🔹 **Backend**: Spring Boot
🔹 **Frontend**: Angular
🔹 **Language**: Java 21 ☕ & TypeScript
🔹 **Database**: PostgreSQL 🐘  
🔹 **API Documentation**: Springdoc OpenAPI (Swagger UI) 📄  
🔹 **Build Tool**: Gradle 📦  
🔹 **Containerization**: Docker Compose for PostgreSQL 🐳  
🔹 **Testing**: JUnit 5 with MockMvc ✅  

---

## 🚀 PREREQUISITES  

🔹 **Java 21** installed 📌  
🔹 **Gradle** installed 🛠️  
🔹 **PostgreSQL** configured 🐘
🔹 **Angular CLI** installed (npm install -g @angular/cli) 🅰️
🔹 **Docker** (optional, for running the database via Docker Compose) 🐳  
🔹 **Git** installed to clone the project 🖥️  

---

## 📥 INSTALLATION & SETUP  

| Step | Description |
|------|------------|
| **1. Clone the Repository** | Clone the project from GitHub and navigate into the directory. |
| **2. Configure the Database** | Ensure PostgreSQL is running and update `application.yml` with your database credentials. |
| **3. Build and Run the Application** | Use Gradle to build and start the application. |
| **4. Start the Angular Frontend** | Run the Angular application for the user interface. |
| **5. Access the API** | Open Swagger UI or use Postman to test the API endpoints. |

### 🔹 1. Clone the Repository  
```bash
git clone https://github.com/zntPEGASUS77K/TEACHSPACETOOLS.git
cd TEACHSPACETOOLS
```
### 🔹 2. Configure the Database
If using local PostgreSQL, ensure your application.yml contains the correct settings:
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5433/your_database
    username: your_username
    password: your_password
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
```

If using Docker, start the PostgreSQL container with:
```bash
docker-compose up -d
```

### 🔹 3. Run the Application
```bash
./gradlew bootRun
```
The application will be available at:
- 📌 Swagger UI: http://localhost:8085/swagger-ui.html

### 🔹 4. Start the Angular Frontend
```bash
cd frontend
npm install
ng serve
```
The Angular interface will be available at:
- 🌍 http://localhost:4200

### 🧪 Testing
Run unit and integration tests with:
```bash
./gradlew test
```

## 📌 API ENDPOINTS
| Method | Endpoint             | Description            |
|--------|-----------------------|------------------------|
| GET    | /api/v1/profs         | Retrieve all professors|
| POST   | /api/v1/profs         | Add a new professor    |
| PUT    | /api/v1/profs/{id}    | Update a professor     |
| DELETE | /api/v1/profs/{id}    | Delete a professor     |
| GET    | /api/v1/salles        | Retrieve all rooms     |
| POST   | /api/v1/salles        | Add a new room         |
| GET    | /api/v1/occuper       | Get room assignments   |

## 📜 LICENCE
📄 This project is licensed under the MIT License.

🔥 Enjoy this application 🚀
