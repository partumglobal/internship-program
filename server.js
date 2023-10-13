import express from 'express'
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


let todos = [
    {
        id: 1 ,
        title: 'My first todo',
        complete: true
    },
     {
        id: 2 ,
        title: 'My second todo',
        complete: false
    }
]


// define a route

// GET ROUTE
app.get('/todos', (req, res) => {
    res.json(todos)
})

// GET BY ID ROUTE
app.get('/todos/:id', (req, res) => {
   const id = parseInt(req.params.id)
   const todo = todos.find(todo => todo.id === id);

   if (todo){
    res.json(todo)
   } else {
    res.status(404).json({message: "Todo not found"})
   }
})

// DELETE BY ID ROUTE
app.delete('/todos/:id', (req, res) => {
   const id = parseInt(req.params.id)
   const todo = todos.findIndex(todo => todo.id === id)

    if (todo !== -1 ){
        todos.splice(todo, 1)

        res.json({message: `todo with ${id} deleted`})
    } else {
    res.status(404).json({message: "Todo not found"})
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




app.listen( port, () => {
    console.log(`server is running on port ${port} ` );
})
