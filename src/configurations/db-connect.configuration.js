import mongoose from 'mongoose';

async function connect() {
  const uri = process.env.DB_CONNECTION_STRING;
  mongoose.connect(uri);

  return mongoose.connection;
}

export default connect;