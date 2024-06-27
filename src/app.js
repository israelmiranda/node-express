import express from 'express';

const app = express();
app.use(express.json())

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

function findBookBy(id) {
  return books.find(book => book.id === id);
}

app.get('/books', (_, res) => {
  res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
  const book = findBookBy(parseInt(req.params.id));
  if (!book) {
    res.status(404).json({ error: 'not found' });
  } else {
    res.status(200).json(book);
  }
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send();
});

app.put('/books/:id', (req, res) => {
  const book = findBookBy(parseInt(req.params.id));
  if (!book) {
    res.status(404).json({ error: 'not found' });
  } else {
    book.title = req.body.title;
    book.author = req.body.author;
    res.status(204).send();
  }
});

app.delete('/books/:id', (req, res) => {
  const book = findBookBy(parseInt(req.params.id));
  if (!book) {
    res.status(404).json({ error: 'not found' });
  } else {
    books.splice(books.indexOf(book), 1);
    res.status(204).send();
  }
});

export default app;