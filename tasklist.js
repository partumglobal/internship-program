
const taskList = {
    tasks: [],
  
    
    addTask: function(task) {
      this.tasks.push(task); 
    },
  
    
    deleteTask: function(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) { 
        this.tasks.splice(index, 1);
      }
    },
  
    
    displayTasks: function() {
      console.log("Tasks:"); 
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  };
  
 

  taskList.addTask("Task 1");
  taskList.addTask("Task 2");
  taskList.addTask("Task 3");

  
  taskList.deleteTask("Task 2");
  
  
  taskList.displayTasks();
  
  
  taskList.displayTasks();
  