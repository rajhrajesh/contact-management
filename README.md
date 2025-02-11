User Management System
Description
A User Management System built with Node.js, Express, MongoDB, and React, allowing users to create, update, delete, and search contacts efficiently. It includes authentication and secure user data handling.

Features
User authentication (Register, Login, Logout)
JWT-based authentication
CRUD operations for contacts (Create, Read, Update, Delete)
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

bash
Copy
Edit
git clone https://github.com/rajhrajesh/user-management.git
cd user-management
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory and add the following:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRY=1d
Start the backend server:

bash
Copy
Edit
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
User Management API - Test Points
1. Register
POST /users/register
Valid data → 201
Missing fields → 400
Existing email → 400
2. Login
POST /users/login
Valid credentials → 200
Invalid password → 401
Non-existent email → 404
3. Profile
GET /users/myprofile
Valid token → 200
No token → 401
Invalid token → 401
4. Logout
POST /users/logout
Valid token → 200
5. Admin: Get Users
GET /users
Admin token → 200
No token → 401
Non-admin token → 403
6. Update Profile
PUT /users/:id
Valid token → 200
Invalid token → 401
Unauthorized → 403
7. Admin: Delete User
DELETE /users/:id
Admin token → 200
No token → 401
Non-admin token → 403
Error Handling
Missing fields → 400
Existing email → 400
Invalid credentials → 401
Unauthorized → 403
License
This project is licensed under the MIT License.

Contact
For any queries, feel free to reach out:

Email: penurajeshitsd@gmail.com
LinkedIn: www.linkedin.com/in/rajhrajesh
GitHub: github.com/rajhrajesh
