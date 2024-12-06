# Task-Reminder-App
A web-based application to keep track of daily, weekly, and monthly tasks. Users can create, manage, and set reminders for their tasks, ensuring they stay on top of their commitments.

Features
Task Management: Add, edit, delete tasks.
Task Reminders: Set reminders for tasks, including alarms.
Task List View: View all tasks in a simple list format.
User Interface: Built with React for a responsive and user-friendly experience.
Back-End API: A RESTful API built with Spring Boot for handling tasks and reminders.
Database: MySQL (or H2 for development) to persist task data.
Deployable: The app can be deployed on cloud platforms like Heroku, AWS, or Netlify.
Tech Stack
Front-End: React, JavaScript, CSS (Bootstrap or Material UI)
Back-End: Spring Boot, Java
Database: MySQL or H2
API Integration: Axios or Fetch API for connecting front-end with back-end
Deployment: Heroku (for back-end), Netlify or Vercel (for front-end)
Installation
Front-End (React)
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/task-reminder-app.git
cd task-reminder-app/frontend
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
The front-end should now be running on http://localhost:3000.

Back-End (Spring Boot)
Clone the repository (if separate back-end repo):

bash
Copy code
git clone https://github.com/your-username/task-reminder-backend.git
cd task-reminder-backend
Build the Spring Boot application using Maven or Gradle:

bash
Copy code
mvn clean install
Run the application:

bash
Copy code
mvn spring-boot:run
The back-end should now be running on http://localhost:8080.

Database Configuration
Configure your application.properties for MySQL (or H2 for development):

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/task_db
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
For H2 (development):

properties
Copy code
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.hibernate.ddl-auto=update
Usage
Open the front-end in your browser at http://localhost:3000.
Add a new task by filling out the form with task details.
Edit or delete tasks by clicking the respective buttons in the task list.
Set reminders for tasks with an alarm sound to ensure you never miss a task.
Endpoints
The back-end exposes the following API endpoints:

GET /api/tasks: Fetch all tasks.
POST /api/tasks: Create a new task.
PUT /api/tasks/{id}: Update an existing task.
DELETE /api/tasks/{id}: Delete a task.
Deployment
Deploy the Back-End (Spring Boot)
You can deploy the back-end to platforms like Heroku or AWS. Here's how to deploy it on Heroku:

Make sure you have the Heroku CLI installed.

Login to Heroku:

bash
Copy code
heroku login
Create a new Heroku app:

bash
Copy code
heroku create task-reminder-app-backend
Push the app to Heroku:

bash
Copy code
git push heroku master
The back-end will now be live on Heroku with a URL provided in the terminal.

Deploy the Front-End (React)
For front-end deployment, you can use Netlify or Vercel. Here's how to deploy on Netlify:

Go to Netlify and create a free account.
Link your GitHub repository for the project.
Click Deploy site, and Netlify will automatically build and deploy your React app.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Spring Boot
React
MySQL
Netlify
Axios
