const express = require('express')

const router = express.Router();
const handleQueryController = require('../controller/chatController')

router.post('/ask-question', handleQueryController);


module.exports = router;