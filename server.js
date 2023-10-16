const { Todo } = require('./model')
const { connect } = require('./db')

const express = require('express')
const app = express()
const port = 3000

// !TODO install dependencies

// npm install

// npm init
// npm install express
// node server.js

app.use(express.json());

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });




// define a route

// GET ROUTE
app.get('/todos/', async (req, res) => {

  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'error getting todos' })
  }
})


// app.post('/todos', async (req, res) => {
//   try {
//     const { title, completed } = req.body;
//     const todo = new Todo({ title, completed });
//     const saveTodo = await todo.save();
//     res.json(saveTodo)
//   } catch (err) {
//     res.status(500).json({ message: 'error getting todos' })

//   }
// })

app.post('/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const saveTodo = await todo.save();
    res.json(saveTodo)
  } catch (err) {
    res.status(500).json({ message: 'error getting todos' })

  }
})

// GET BY ID ROUTE
// app.get('/todos/:id', (req, res) => {
//    const id = parseInt(req.params.id)
//    const todo = todos.find(todo => todo.id === id);

//    if (todo){
//     res.json(todo)
//    } else {
//     res.status(404).json({message: "Todo not found"})
//    }
// })


const todos = [
  {
  id: 1,

},

{
  id: 2,

},

{
  id: 3,

}
]

// DELETE BY ID ROUTE
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const todo = todos.findIndex(todo => todo.id === id)

  if (todo !== -1) {
    todos.splice(todo, 1)

    res.json({ message: `todo with ${id} deleted` })
  } else {
    res.status(404).json({ message: "Todo not found" })
  }
})


// !TODO implement PUT AND POST routes

// POST ROUTE

// request body
// push to todo array
// response


// PUT ROUTE

// get todo id
// request body
// compare todos




app.listen(port, async () => {
  await connect();
  console.log(`server is running on port ${port} `);
})