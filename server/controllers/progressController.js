const Progress = require('../models/Progress');

exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user.id });
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateProgress = async (req, res) => {
  const { problemId, completed, notes } = req.body;

  try {
    let progress = await Progress.findOne({ user: req.user.id, problem: problemId });

    if (progress) {
      progress.completed = completed;
      progress.notes = notes;
    } else {
      progress = new Progress({
        user: req.user.id,
        problem: problemId,
        completed,
        notes,
      });
    }

    await progress.save();
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
