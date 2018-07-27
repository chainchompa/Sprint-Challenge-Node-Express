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

//View action by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  actionModel
  .get(id)
  .then(action => {
    if (action.length === 0) {
      res.status(404).json({ message: "The action with the specified ID does not exist." })
    } else {
      res.status(200).json({ action })
    }
  })
  .catch(error => {
    res.status(500).json({ error: "The action information could not be retrieved." })
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

//Update an action
router.put('/:id', (req, res) => {
  const { project_id, description, notes } = req.body;
  const { id } = req.params;
  if(!project_id || !description || !notes ) {
    res.status(400).json({ error: "Please provide a project ID, description, and notes for this action"});
  }
  actionModel
  .update(id, { project_id, description, notes })
  .then(action => {
    if(action === 0) {
      res.status(404).json({ error: "The action with the specified ID does not exist" })
      return;
    }
    res.status(200).json({ project })
  })
  .catch(error => {
    res.status(500).json({ error: "There was an error while updating the action to the database" })
  })
})

module.exports = router;
