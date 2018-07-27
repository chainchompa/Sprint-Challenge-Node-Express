const express = require('express');
const server = express();
const morgan = require('morgan')
const helmet = require('helmet');

const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');

server.use(express.json());
server.use(morgan('dev'));
server.use(helmet());

server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);
server.use('/', (req, res) => res.send('API up and running!'));

server.listen(8000, () => console.log('API running on port 8000'));
