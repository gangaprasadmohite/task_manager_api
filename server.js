const express = require('express');
const bodyParser = require('body-parser');
const tasks = require('./tasks');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/tasks', (req, res) => {
  const allTasks = tasks.getAllTasks();
  res.json(allTasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.getTaskById(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found.');
  }
});

app.post('/tasks', (req, res) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.completed ||
    !req.body.priority
  ) {
    res
      .status(400)
      .send(
        'Task must have a title, description, completion status and priority.'
      );
  } else {
    const newTask = tasks.createTask(req.body);
    res.json(newTask);
  }
});

app.put('/tasks/:id', (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.completed) {
    res
      .status(400)
      .send(
        'Task must have a title, description, completion status and priority.'
      );
  } else {
    const updatedTask = tasks.updateTask(req.params.id, req.body);
    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).send('Task not found.');
    }
  }
});

app.delete('/tasks/:id', (req, res) => {
  const deletedTask = tasks.deleteTask(req.params.id);
  if (deletedTask) {
    res.json(deletedTask);
  } else {
    res.status(404).send('Task not found.');
  }
});

app.get('/tasks/priority/:level', (req, res) => {
  const level = req.params.level.toLowerCase();
  const filteredTasks = tasks
    .getAllTasks()
    .filter((task) => task.priority && task.priority.toLowerCase() === level);
  res.json(filteredTasks);
});

app.listen(port, () => {
  console.log(`Task Manager API running on port ${port}.`);
});
