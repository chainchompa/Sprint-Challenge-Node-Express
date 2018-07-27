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

//View a project's actions
router.get('/:id', (req, res) => {
  const { id } = req.params;
  projectModel
  .getProjectActions(id)
  .then(project => {
    if (project.length === 0) {
      res.status(404).json({ message: "The project with the specified ID does not exist." })
    } else {
      res.status(200).json({ project })
    }
  })
  .catch(error => {
    res.status(500).json({ error: "The project information could not be retrieved." })
  })
})

//Add a new project
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({ errorMessage: "Please provide a name and description for the project." })
    return;
  }
  projectModel
  .insert({ name, description })
  .then(project => {
    res.status(201).json({ project })
  })
  .catch(error => {
    res.status(500).json({ error: "There was an error while saving the project to the database" })
  })
})

module.exports = router;
