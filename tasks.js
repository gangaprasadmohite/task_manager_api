let tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description for task 1',
    completed: false,
    priority: 'low',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description for task 2',
    completed: true,
    priority: 'medium',
  },
];

let nextTaskId = 3;

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find((task) => task.id === parseInt(id));
}

function createTask(task) {
  const newTask = {
    id: nextTaskId++,
    title: task.title,
    description: task.description,
    completed: task.completed,
    priority: task.priority,
  };
  tasks.push(newTask);
  return newTask;
}

function updateTask(id, updatedTask) {
  const index = tasks.findIndex((task) => task.id === parseInt(id));
  if (index !== -1) {
    tasks[index].title = updatedTask.title;
    tasks[index].description = updatedTask.description;
    tasks[index].completed = updatedTask.completed;
    tasks[index].priority = updatedTask.priority;
    return tasks[index];
  }
  return null;
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === parseInt(id));
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1)[0];
    return deletedTask;
  }
  return null;
}

function getTasksByPriority(priority) {
  return tasks.filter((task) => task.priority === priority);
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTasksByPriority,
};
