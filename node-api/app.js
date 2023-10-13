import  express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


// Create a new item
app.post('/items', (req, res) => {
  // Logic to create a new item
  res.send('Item created');
});

// Read all items
app.get('/items', (req, res) => {
  // Logic to fetch all items
  res.send('List of items');
});

// Read a single item
app.get('/items/:id', (req, res) => {
  // Logic to fetch a single item by ID
  res.send('Single item');
});

// Update an item
app.put('/items/:id', (req, res) => {
  // Logic to update an item by ID
  res.send('Item updated');
});

// Delete an item
app.delete('/items/:id', (req, res) => {
  // Logic to delete an item by ID
  res.send('Item deleted');
});
