// Task array to store tasks
let tasks = [];

// Function to add a new task
function addTask(id, name, description) {
  tasks.push({ id, name, description });
  console.log(`Task added: ${name}`);
}

// Function to view all tasks
function viewTasks() {
  console.log("Tasks:");
  tasks.forEach(task => console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`));
}

// Function to update a task
function updateTask(id, newName, newDescription) {
  let task = tasks.find(task => task.id === id);
  if (task) {
    task.name = newName;
    task.description = newDescription;
    console.log(`Task updated: ID ${id}`);
  } else {
    console.log(`Task with ID ${id} not found`);
  }
}

// Function to delete a task
function deleteTask(id) {
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);
  if (tasks.length < initialLength) {
    console.log(`Task with ID ${id} deleted`);
  } else {
    console.log(`Task with ID ${id} not found`);
  }
}

// Example usage
addTask(1, "Task 1", "Description for Task 1");
addTask(2, "Task 2", "Description for Task 2");
viewTasks();
updateTask(1, "Updated Task 1", "Updated description for Task 1");
deleteTask(2);
viewTasks();
