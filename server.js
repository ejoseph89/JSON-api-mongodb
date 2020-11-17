// Modules, dependencies, and other requirements
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Photo = require('./models/photo')
const app = express();
const PORT = process.env.PORT || 3000;


// Connecting to the database - decided to put 'app.listen' inside so that the server is only listening when connected to the databse
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('connected to db')
    // listen for request || after connecting to db
    app.listen(PORT, () => {
      console.log('Server up!');
    });
  })
  .catch((err) => {console.log(err)});

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname })
})


// JSON endpoint - gets all objects
app.get('/api/v0/photos', (req, res) => {
  Photo.find()
    .then((photos) => {
      res.json(photos)
    })
    .catch((err) => {
      res.status(500).send({message: err.message})
    })
})

// JSON endpoint - gets single object based on id - does not work. EDIT: It works now!
app.get('/api/v0/photos/:id', (req, res) => {
  Photo.findOne({id: req.params.id}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
    

// Error message
app.use((req, res) => {
  res.status(404).send('404 Error: File not found');
})
