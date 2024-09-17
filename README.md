

---

# Task Management API

Welcome to the **Task Management API**, a powerful API for managing tasks with user authentication. Built using **Express.js** and **MongoDB**, this API offers full **CRUD** functionality, task categorization, and status management.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to store tasks.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.

## Getting Started

### Available API Endpoints

#### Task Management

- **GET** `/api/tasks` - Retrieve all tasks (supports pagination).
- **POST** `/api/tasks` - Create a new task.
- **GET** `/api/tasks/:id` - Get a task by ID.
- **PUT** `/api/tasks/:id` - Update a task by ID.
- **DELETE** `/api/tasks/:id` - Delete a task by ID.


#### Contributing
```
Feel free to fork this repository, make changes, and submit a pull request. Here's how:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add some new feature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/new-feature
   ```
5. **Create a pull request**.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

