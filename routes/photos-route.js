const express = require('express');
const router = express.Router();
const Photo = require('../models/photo')


// Get all photos
router.get('/api/v0/photos', async (req, res) => {
  try {
    const photos = await Photo.find()
    res.json(photos);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
})

// Get one photo
router.get('/api/v0/photos/:id', getPhoto, (req, res) => {
  res.json(res.photo);
})

async function getPhoto(req, res, next) {
  let photo;
  
  try {
    photo = await Photo.findByID(req.params.id);
    if (photo == null) {
      return res.status(404).json({message: 'Cannot find photo'});
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.photo = photo;
}

router.use((req, res) => {
  res.status(404).send('404 Error: File not found');
})

module.exports = router;
