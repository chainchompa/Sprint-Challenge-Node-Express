const express = require('express');
const router = express.Router();

const actionModel = require('../data/helpers/actionModel.js');

//View actions
router.get('/', (req, res) => {
  actionModel
  .get()
  .then(actions => {
    res.status(200).json({ actions });
  })
  .catch(error => {
    res.status(500).json({ error: "Could not retrieve actions"})
  })
})

module.exports = router;
