const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let todos = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Build a RESTful API', completed: false }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.post('/todos', (req, res) => {
  const { title, completed } = req.body;
  const id = todos.length + 1;
  const newTodo = { id, title, completed: completed || false };
  todos.push(newTodo);
  res.json(newTodo);
});


app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    todo.title = title || todo.title;
    todo.completed = completed || todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: 'Todo deleted' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
