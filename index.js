fetch('http://localhost:3000/todos',
{mode: 'no-cors'}
).then(response => response.json()).then(todos => {
    const todoList = document.getElementById('todo-list')

    console.log(todos);

    todos.forEach((todo) => {
       const listItem = createElement('li')
       listItem.textContent = todo.title
       todoList.appendChild(listItem)
    })
}).catch (error => {
     console.error('Error fetching todos', error)
})




// async function fetchTodos(){
//   try {
//     const response = await fetch('/todos')
//     const todos = await response.json();

//     console.log('todo list' , todos);

//     const todoList = document.getElementById('todo-list');

//     todos.forEach((todo) => {
//       const listItem = createElement('li')
//       listItem.textContent = todo.title
//       todoList.appendChild(listItem)
//     })
//   } catch (error) {
//     console.error('Error fetching todos', error)
//   }
// }

// window.addEventListener('load', fetchTodos)