const express = require('express');
const router = express.Router();
const {addTasks, updateTasks, getAllTasks, getTasks,deleteTasks} = require('../controllers/tController.js');


router.route('/').post(addTasks);
router.route('/').get(getAllTasks);
router.route('/:id').get(getTasks);
router.route('/:id').put(updateTasks);
router.route('/:id').delete(deleteTasks);

module.exports = router;