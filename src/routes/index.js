const express = require('express');

const router = express.Router();

// Controllers
const { MovieController } = require('../controllers')


// Middlewares
const { saveApiCallLogs } = require('../middleware');

//---------------------------
//        Route List        |
//---------------------------

router.get('/search', saveApiCallLogs(), MovieController.search);
router.get('/detail', saveApiCallLogs(), MovieController.getDetail);

module.exports = router;
