const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/:id', (req, res) => {
  // code here
  const galleryId = req.params.id;
  const queryGalleryUpdate = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
  pool
    .query(queryGalleryUpdate, [galleryId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('this error belongs to put route', error);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const queryGallery = `SELECT * FROM "gallery" ORDER BY "id";`;
  pool
    .query(queryGallery)
    .then((result) => {
      console.log('this is the list', result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('This is an error on the get route', error);
      res.sendStatus(500);
    });
});

module.exports = router;
