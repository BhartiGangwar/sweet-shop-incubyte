# 🍬 Sweet Shop Management System

A full-stack application designed to manage the inventory and sales of a sweet shop. This project serves as a comprehensive **TDD Kata** to test skills in API development, database management, frontend implementation, and modern development workflows.

## 🚀 Core Features

### Backend (Spring Boot RESTful API)

The API is built on **Java** using the **Spring Boot** framework and utilizes a **MySQL** database for persistent data storage.

* **User Authentication:** Users can register and log in. Token-based authentication (**JWT**) secures protected endpoints.
* **Sweets Management (Protected):**
    * Add a new sweet.
    * View a list of all available sweets.
    * Search for sweets by name, category, or price range.
    * Update a sweet's details.
    * Delete a sweet (Admin only).
* **Inventory Management (Protected):**
    * Purchase a sweet, decreasing its quantity.
    * Restock a sweet, increasing its quantity (Admin only).

### Frontend (React SPA)

The modern Single Page Application (SPA) is built with **React** to interact with the Spring Boot backend.

* **User Interface:** Intuitive user registration and login forms.
* **Dashboard/Homepage:** Displays all available sweets.
* **Functionality:** Ability to search and filter the sweet listings.
* **Purchasing:** A "Purchase" button on each sweet (disabled if the stock quantity is zero).
* **Admin Tools:** Dedicated forms/UI for Admin users to add, update, and delete sweets.
* **Design:** A responsive and visually appealing design provides a great user experience.

***

## 🛠️ Technology Stack

| Component | Technology | Frameworks/Libraries |
| :--- | :--- | :--- |
| **Backend** | Java | Spring Boot, Spring Security (JWT) |
| **Database** | **MySQL** | Hibernate/JPA |
| **Frontend** | JavaScript (or TypeScript) | React, **[Insert UI Library like Material UI/Bootstrap if used]** |
| **Testing** | Java/Spring | JUnit 5, Mockito |
| **Version Control** | Git | GitHub |

***

## 💻 Getting Started (VS Code Environment)

This project is set up for easy execution within Visual Studio Code.

### Prerequisites

You will need the following installed on your machine:

* **Java Development Kit (JDK) 17+**
* **Node.js & npm (or yarn)**
* **MySQL Server running**
* **Git**
* **VS Code Extensions (Recommended):** Java Extension Pack, Spring Boot Extension Pack, ESLint, Prettier.

### 1. Initial Setup

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_LINK]
    cd sweet-shop-management
    ```
2.  **Open in VS Code:**
    ```bash
    code .
    ```
3.  **Database Configuration:**
    * **Create a database** named `sweetshop_db` (or whatever you named it) in your MySQL server.
    * **Update the database connection details** in the backend project's configuration file (`sweet-shop-backend/src/main/resources/application.properties` or `.yml`):
        ```properties
        spring.datasource.url=jdbc:mysql://localhost:3306/sweetshop_db?useSSL=false&serverTimezone=UTC
        spring.datasource.username=your_mysql_user
        spring.datasource.password=your_mysql_password
        spring.jpa.hibernate.ddl-auto=update # or create, depending on your setup
        ```

### 2. Running the Backend (Spring Boot)

1.  **Navigate to the Backend:** Open the `sweet-shop-backend` folder in the VS Code Explorer.
2.  **Start the Server:**
    * **Using the Spring Boot Extension:** Open the *Spring Boot Dashboard*, find your project, and click the **Play (▶) button** to run the application.
    * **Using the Terminal:** Open a new VS Code terminal (`Terminal > New Terminal`), navigate to the backend directory, and run:
        ```bash
        ./mvnw spring-boot:run
        ```
    * The API will start on `http://localhost:8080`.

### 3. Running the Frontend (React)

1.  **Navigate to the Frontend:** Open the `sweet-shop-frontend` folder in the VS Code Explorer.
2.  **Install Dependencies:** Open a **second** VS Code terminal (keep the backend one running), navigate to the frontend directory, and run:
    ```bash
    npm install 
    # OR 
    # yarn install
    ```
3.  **Start the React App:**
    ```bash
    npm start 
    # OR 
    # yarn start
    ```
4.  The application will open in your browser, usually at `http://localhost:3000`, and will automatically connect to the running Spring Boot API.

***

## ✅ Test Report

* **Test-Driven Development (TDD):** The backend logic was developed following the **Red-Green-Refactor** cycle, as evidenced in the commit history. Tests were written **before** the corresponding functionality.
* **Coverage:** High test coverage was prioritized for core business logic (user authentication, purchasing, inventory restock).

### **[Optional - Link to Test Report]**

A detailed test report showing the results of the test suite is available here: **[Link to Test Report, e.g., a report hosted on a CI/CD tool or a local test output file]**

***

## 🖼️ Application Screenshots

 [![App Screenshot](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_1.jpg?raw=true)](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_1.jpg?raw=true)
![Demo Screenshot](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_2.jpg?raw=true)
![Demo 3](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_3.jpg?raw=true)
![Demo 4](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_4.jpg?raw=true)
![Demo 5](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_5.jpg?raw=true)
![Demo 6](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_6.jpg?raw=true)
![Demo 7](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_7.jpg?raw=true)
![Demo 8](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_8.jpg?raw=true)
![Demo 9](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_9.jpg?raw=true)
![Demo 10](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_10.jpg?raw=true)
![Demo 11](https://github.com/BhartiGangwar/sweet-shop-incubyte/blob/main/Screenshots/demo_11.jpg?raw=true)




***

## 🤖 My AI Usage

This project leveraged modern AI tools to accelerate development and ensure code quality, maintaining full transparency and adherence to the co-authorship guideline.

### Which AI tools I used

* **Gemini:** Used primarily for brainstorming complex API endpoint structures, refining documentation, and providing clear explanations of Java concurrency patterns.
* **GitHub Copilot:** Used extensively for generating boilerplate code, suggesting unit test assertions, and auto-completing repetitive methods in both React and Spring Boot.

### How I used them

* **API Endpoint Structures (Gemini):** "I used Gemini to brainstorm effective URL structures and request/response payloads for the protected Inventory endpoints (`/api/sweets/id/purchase` and `/api/sweets/id/restock`), ensuring they were RESTful and clearly communicated intent."
* **Unit Test Generation (Copilot):** "I relied on GitHub Copilot to quickly generate mock objects and the initial `when().thenReturn()` structure for unit tests in the Spring Boot service layer, allowing me to focus on complex test case logic."
* **React Component Hooks (Copilot):** "Copilot was used to quickly scaffold standard React functional components, including basic state management (`useState`) and side effects (`useEffect`) hooks for the Admin forms."

### Your reflection on how AI impacted your workflow

AI significantly boosted my productivity, especially during the setup phase and in test creation. Tools like Copilot drastically reduced the time spent on writing boilerplate, allowing me to dedicate more focus to implementing the TDD philosophy, complex business logic, and security features (JWT implementation). The tools acted as intelligent assistants, helping to maintain clean code and consistent naming conventions, and served as an instant rubber duck for debugging and design questions.

