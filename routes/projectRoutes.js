const express = require('express');
const router = express.Router();

const projectModel = require('../data/helpers/projectModel.js');

//View projects
router.get('/', (req, res) => {
  projectModel
  .get()
  .then(projects => {
    res.status(200).json({ projects });
  })
  .catch(error => {
    res.status(500).json({ error: "Could not retrieve projects"})
  })
})


module.exports = router;
