const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');
const auth = require('../middleware/auth');

router.get('/', auth, topicController.getTopics);
router.post('/', auth, topicController.createTopic);
router.post('/:topicId/problems', auth, topicController.createProblem);

module.exports = router;
