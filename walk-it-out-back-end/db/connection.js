const mongoose = require('mongoose');

// TODO: need to create a .env file with connection URI
mongoose.connect('mongodb://localhost/walk-it-out', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});