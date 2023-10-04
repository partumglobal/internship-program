
const taskList = {
    tasks: [],
  
    // A method to add a task to the tasks array
    addTask: function(task) {
      this.tasks.push(task); // Push the task into the tasks array
    },
  
    // To delete a task from the tasks array
    deleteTask: function(task) {
      // Find the index of the task in the tasks array
      const index = this.tasks.indexOf(task);
      if (index !== -1) { // If the task is found (index is not -1)
        // Remove the task from the tasks array using splice
        this.tasks.splice(index, 1);
      }
    },
  
    // Display all tasks in the tasks array
    displayTasks: function() {
      console.log("Tasks:"); // Print a header
      // Iterate through the tasks array and log each task with an index
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  };
  
  // Tasks added  to the taskList
  taskList.addTask("Task 1");
  taskList.addTask("Task 2");
  taskList.addTask("Task 3");
  
  //  Tasks display in the taskList
  taskList.displayTasks();
  
  // Delete a task from the taskList
  taskList.deleteTask("Task 2");
  
  // Display tasks in the taskList again
  taskList.displayTasks();
  