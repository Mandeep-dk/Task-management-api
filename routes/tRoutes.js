const express = require('express');
const router = express.Router();
const {addTask, updateTask, getAllTasks, getTask, deleteTask} = require('../controllers/tController.js');


router.route('/').post(addTask);
router.route('/').get(getAllTasks);
router.route('/:id').get(getTask);
router.route('/:id').put(updateTask);
router.route('/:id').delete(deleteTask);

module.exports = router;