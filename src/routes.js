const express = require('express');
const routes = express.Router();
const cors = require('cors')
const TaskController = require('./controllers/TaskController')


routes.use(cors())
routes.get("/tasks", TaskController.taskDone)
routes.post("/save", TaskController.create)
routes.delete("/:id", TaskController.remove)


module.exports = routes;