const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();


router.get('/', itemController.getProducts);
router.get