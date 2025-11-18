const Topic = require('../models/Topic');

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createTopic = async (req, res) => {
  const { title } = req.body;

  try {
    const newTopic = new Topic({
      title,
    });

    const topic = await newTopic.save();
    res.json(topic);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createProblem = async (req, res) => {
  const { title, youtubeLink, leetcodeLink, articleLink, difficulty } = req.body;

  try {
    const topic = await Topic.findById(req.params.topicId);
    if (!topic) {
      return res.status(404).json({ msg: 'Topic not found' });
    }

    const newProblem = {
      title,
      youtubeLink,
      leetcodeLink,
      articleLink,
      difficulty,
    };

    topic.problems.push(newProblem);
    await topic.save();
    res.json(topic);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
