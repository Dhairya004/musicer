const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// MongoDB database name
const dbName = 'users';

// Connect to MongoDB
mongodb.MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }

  const db = client.db(dbName);

  // Define an API endpoint to handle the registration data
  app.post('/register', (req, res) => {
    const userData = req.body; // Get the user data from the request body

    // Insert the user data into the MongoDB collection
    db.collection('users').insertOne(userData, (err, result) => {
      if (err) {
        console.error('Failed to insert data into MongoDB:', err);
        res.status(500).json({ error: 'Failed to register user' });
      } else {
        console.log('User registered successfully:', result.insertedId);
        res.status(200).json({ message: 'User registered successfully' });
      }
    });
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
