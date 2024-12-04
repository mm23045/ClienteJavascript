const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/', reservaController.findRange);
router.get('/:id', reservaController.findById);
router.post('/', reservaController.create);

module.exports = router;
