const express = require('express');
const { get } = require('http');
const router = express.Router();

// Get ControllerS
const { getAllDeves, getSingleDeve, CreateDeve, editDeve, deleteDeve} = require('../controllers/Deves_controller');

// Routes Function working start here
router.route('/').get(getAllDeves).post(CreateDeve);
router.route('/:id').get(getSingleDeve).put(editDeve).patch(editDeve).delete(deleteDeve);
// Routes Function working End here

module.exports = router;