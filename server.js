const { Todo } = require('./model')
const { connect } = require('./db')

const express = require('express')
const app = express()
const port = 3000

// !TODO install dependencies

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


// GET ROUTE
app.get('/todos/', async (req, res) => {
  try {
    const todos = await Todo.find();
     res.render("index", {todo : todos})

  } catch (err) {
    res.status(500).json({ message: 'error getting todos' });
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.redirect('/todos/');
  } catch (err) {
    res.status(500).json({ message: 'error deleting todo' });
  }
});


app.post('/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const saveTodo = await todo.save();
    res.json(saveTodo)
  } catch (err) {
    res.status(500).json({ message: 'error getting todos' })

  }
})





app.listen(port, async () => {
  await connect();
  console.log(`server is running on port ${port} `);
})