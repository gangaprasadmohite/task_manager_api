# Task Manager API

This is a RESTful API for a simple task manager application built using Node.js and Express.js. The API allows users to perform CRUD operations (Create, Read, Update, and Delete) on tasks. Tasks have a title, description, completion status, and priority level.

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Usage

### Endpoints

The API has the following endpoints:

- `GET /tasks`: Retrieve all tasks
- `GET /tasks/:id`: Retrieve a single task by ID
- `POST /tasks`: Create a new task
- `PUT /tasks/:id`: Update an existing task by ID
- `DELETE /tasks/:id`: Delete a task by ID
- `GET /tasks/priority/:level`: Retrieve tasks based on priority level
