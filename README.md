User Management System

Description

A User Management System built with Node.js, Express, MongoDB, and React, allowing users to create, update, delete, and search contacts efficiently. It includes authentication and secure user data handling.

Features

User authentication (Register, Login, Logout)

JWT-based authentication

Create, Read, Update, and Delete (CRUD) contacts

Search contacts by name, email, or phone

Secure API with authentication middleware

Technologies Used

Backend: Node.js, Express.js, MongoDB, Mongoose

Frontend: React.js

Authentication: JSON Web Tokens (JWT), bcrypt.js

Middleware: express-async-handler, dotenv

Installation

Prerequisites

Node.js installed

MongoDB installed or a MongoDB Atlas account

Steps

Clone the repository:

git clone https://github.com/rajhrajesh/user-management.git
cd user-management

Install dependencies:

npm install

Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRY=1d

Start the backend server:

npm start

Navigate to http://localhost:5000

API Endpoints

Authentication Routes

POST /users/register - Register a new user

POST /users/login - Login a user

POST /users/logout - Logout a user

GET /users/myprofile - Get logged-in user profile

Contacts Routes

GET /contacts - Get all contacts (Requires authentication)

POST /contacts - Create a new contact

GET /contacts/:id - Get a single contact by ID

PUT /contacts/:id - Update a contact

DELETE /contacts/:id - Delete a contact

GET /contacts/:id - Search contacts by user_id

License

This project is licensed under the MIT License.

Contact

For any queries, feel free to reach out:

Email: penurajeshitsd@gmail.com

LinkedIn: www.linkedin.com/in/rajhrajesh

GitHub: github.com/rajhrajesh

