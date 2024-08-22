# POC Project

## Overview

This is a Proof of Concept (POC) project using Node.js, Express.js, and MySQL. It demonstrates a basic API for creating users.

## Prerequisites

- Node.js and npm (https://nodejs.org/)
- MySQL (https://www.mysql.com/)
- Postman for testing the API

## Project Structure

poc-project/
│
├── config/
│ └── db.js
│
├── controllers/
│ └── userController.js
│
├── routes/
│ └── api.js
│
├── .env
├── index.js
├── package.json
└── README.md

## Setup

1. _Clone the repository:_

   git clone <repository_url>
   cd poc-project

2. _Install dependencies:_

   npm install

3. _Set up environment variables:_
   Create a .env file in the root directory and add the following:

   PORT=3030
   DB_HOST=localhost
   DB_USER=your-username
   DB_PASSWORD=your-password
   DB_NAME=your-database

4. _Create the database and table:_
   Execute the following SQL commands in your MySQL client:

   sql
   CREATE DATABASE your-database;
   USE your-database;

   CREATE TABLE users (
   id INT PRIMARY KEY,
   username VARCHAR(255) NOT NULL,
   emailid VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   );

5. _Start the server:_

   node index.js

## API Endpoints

### POST /api/users

Create a new user.

_Request Body:_
`json`
{
"id": 1,
"username": "Pymn2 Users",
"emailid": "pymn2@example.com"
"password": "pymn2pass"
}

**Response:**

{
"error": false,
"data": {
"fieldCount": 0,
"affectedRows": 1,
"insertId": 1,
"info": "",
"serverStatus": 2,
"warningStatus": 0,
"changedRows": 0
},
"message": "New user has been created Successfully."
}

### Testing the API with Postman

1. **Open Postman**: Launch the Postman application.

2. **Create a New Request**:

   - Click on the **New** button or use the shortcut `Ctrl+N` (Windows/Linux) or `Cmd+N` (Mac).
   - Select **Request** from the options.

3. **Set up the Request**:

   - **Method**: Select `POST` from the dropdown menu.
   - **URL**: Enter `http://localhost:3030/api/users`.

4. **Set Headers**:

   - Go to the **Headers** tab.
   - Add a new header with the key `Content-Type` and the value `application/json`.

5. **Add the Request Body**:

   - Go to the **Body** tab.
   - Select the **raw** option.
   - Make sure `JSON` is selected from the dropdown menu on the right.
   - Enter the following JSON data into the body:

{
"id": 1,
"username": "Pymn2 Users",
"emailid": "pymn2@example.com"
"password": "pymn2pass"
}

6. **Send the Request**:
   - Click the **Send** button.

### Handling Duplicate Emails

If you try to create a user with an email that already exists, the server will return an error indicating that the email already exists.

**Request:**
{
"id": 1,
"username": "Pymn2 Users",
"emailid": "pymn2@example.com"
"password": "pymn2pass"
}

**Response:**
{
"error": true,
"message": "Email already exists"
}
