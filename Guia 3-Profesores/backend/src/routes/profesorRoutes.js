// backend/src/routes/profesorRoutes.js
const express = require('express');
const profesorController = require('../controllers/profesorController');

const router = express.Router();

router.get('/', profesorController.getProfesores);

// Routear igual que en coso anterior pero en psot
router.post('/', profesorController.postProfesores);


module.exports = router;