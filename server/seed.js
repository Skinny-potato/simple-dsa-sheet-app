const mongoose = require('mongoose');
const Topic = require('./models/Topic');

const topics = [
  {
    title: 'Arrays',
    problems: [
      {
        title: 'Reverse the array',
        youtubeLink: 'https://www.youtube.com/watch?v=g-PGLbMth_g',
        leetcodeLink: 'https://leetcode.com/problems/reverse-string/',
        articleLink: 'https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/',
        difficulty: 'Easy',
      },
      {
        title: 'Find the maximum and minimum element in an array',
        youtubeLink: 'https://www.youtube.com/watch?v=37E9ck2n6gE',
        leetcodeLink: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
        articleLink: 'https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/',
        difficulty: 'Medium',
      },
      {
        title: 'Kadane\'s Algorithm',
        youtubeLink: 'https://www.youtube.com/watch?v=86CQq3pKSUw',
        leetcodeLink: 'https://leetcode.com/problems/maximum-subarray/',
        articleLink: 'https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/',
        difficulty: 'Tough',
      },
    ],
  },
  {
    title: 'Strings',
    problems: [
      {
        title: 'Reverse a String',
        youtubeLink: 'https://www.youtube.com/watch?v=g-PGLbMth_g',
        leetcodeLink: 'https://leetcode.com/problems/reverse-string/',
        articleLink: 'https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/',
        difficulty: 'Easy',
      },
      {
        title: 'Check whether a String is Palindrome or not',
        youtubeLink: 'https://www.youtube.com/watch?v=g-PGLbMth_g',
        leetcodeLink: 'https://leetcode.com/problems/valid-palindrome/',
        articleLink: 'https://www.geeksforgeeks.org/c-program-to-check-if-a-string-is-a-palindrome-or-not/',
        difficulty: 'Medium',
      },
      {
        title: 'Longest Palindromic Substring',
        youtubeLink: 'https://www.youtube.com/watch?v=XYQeMm6NEok',
        leetcodeLink: 'https://leetcode.com/problems/longest-palindromic-substring/',
        articleLink: 'https://www.geeksforgeeks.org/longest-palindromic-substring-set-2/',
        difficulty: 'Tough',
      },
    ],
  },
];

const seedDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/dsa-sheet', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Topic.deleteMany({});
  await Topic.insertMany(topics);

  mongoose.connection.close();
};

seedDB().then(() => {
  console.log('DB seeded');
});
