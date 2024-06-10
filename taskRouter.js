const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/add-client', taskController.addClient);

module.exports = router;