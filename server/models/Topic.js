const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  youtubeLink: {
    type: String,
  },
  leetcodeLink: {
    type: String,
  },
  articleLink: {
    type: String,
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Tough'],
    required: true,
  },
});

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  problems: [ProblemSchema],
});

module.exports = mongoose.model('Topic', TopicSchema);
