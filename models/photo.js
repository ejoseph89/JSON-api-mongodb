const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Photo', photoSchema)