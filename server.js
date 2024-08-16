// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/shop', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.log('Failed to connect to MongoDB', err);
// });

// // Define a contact schema
// const contactSchema = new mongoose.Schema({
//   name: String,
//   phone:String,
//   email: String,
//   message: String
// });

// // Create a model from the schema
// const Contact = mongoose.model('Contact', contactSchema);

// // API endpoint to handle contact form submission
// app.post('/api/contact', (req, res) => {
//   const { name, phone,email, message } = req.body;

//   const newContact = new Contact({ name, phone,email, message });

//   newContact.save()
//     .then(() => res.json({ message: 'Contact saved successfully!' }))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // your MySQL username
  password: '', // your MySQL password
  database: 'shopp' // your database name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// API endpoint to handle form submission
app.post('/api/contact', (req, res) => {
  const { name, phone, email, message } = req.body;
  
  const sql = 'INSERT INTO shop (name, phone, email, message) VALUES (?, ?, ?, ?)';
  
  db.query(sql, [name, phone, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Failed to insert data' });
    } else {
      res.json({ message: 'Contact saved successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});