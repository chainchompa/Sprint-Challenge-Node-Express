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

//Add a new action
router.post('/', (req, res) => {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res.status(400).json({ errorMessage: "Please provide a project ID, description, and some notes for the action." })
    return;
  }
  actionModel
  .insert({ project_id, description, notes })
  .then(action => {
    res.status(201).json({ action })
  })
  .catch(error => {
    res.status(500).json({ error: "There was an error while saving the action to the database" })
  })
})

module.exports = router;
