const router = require('express').Router()
const generateImage= require('../controllers/imagegenrator.controller');

router.post('/generateimage', generateImage);

module.exports = router;