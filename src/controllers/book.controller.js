import book from '../schemas/book.schema.js';

async function list(res) {
  const books = await book.find({});
  res.status(200).json(books);
}

async function find(req, res) {
  const foundBook = await book.findById(req.params.id);
  if (!foundBook) {
    res.status(404).json({ error: 'not found' });
  } else {
    res.status(200).json(foundBook);
  }
}

async function create(req, res) {
  const newBook = await book.create(req.body);
  res.status(201).json(newBook);
}

async function update(req, res) {
  await book.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(req.body);
}

async function remove(req, res) {
  await book.findByIdAndDelete(req.params.id);
  res.status(204).send();
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