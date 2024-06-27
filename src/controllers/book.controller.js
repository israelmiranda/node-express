const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

function list(res) {
  res.status(200).json(books);
}

function find(req, res) {
  const book = findBookBy(parseInt(req.params.id));
  if (!book) {
    res.status(404).json({ error: 'not found' });
  } else {
    res.status(200).json(book);
  }
}

function findBookBy(id) {
  return books.find(book => book.id === id);
}

function create(req, res) {
  const book = req.body;
  book.id = books.length + 1;
  books.push(book);
  res.status(201).json(book);
}

function update(req, res) {
  const book = findBookBy(parseInt(req.params.id));
  if (!book) {
    res.status(404).json({ error: 'not found' });
  } else {
    book.title = req.body.title;
    book.author = req.body.author;
    res.status(200).json(book);
  }
}

function remove(req, res) {
  const book = findBookBy(parseInt(req.params.id));
  if (!book) {
    res.status(404).json({ error: 'not found' });
  } else {
    books.splice(books.indexOf(book), 1);
    res.status(200).json(book);
  }
}

const bookController = () => {
  return {
    list: (_, res) => {
      list(res);
    },
    find: (req, res) => {
      find(req, res);
    },
    create: (req, res) => {
      create(req, res);
    },
    update: (req, res) => {
      update(req, res);
    },
    remove: (req, res) => {
      remove(req, res);
    },
  };
};

export default bookController;