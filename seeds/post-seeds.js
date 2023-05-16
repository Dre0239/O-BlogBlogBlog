const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: 'Hello this is post seed 1',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: 'Hello this is post seed 2',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_body: 'Hello this is post seed 3',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_body: 'Hello this is post seed 4',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_body: 'Hello this is post seed 5',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_body: 'Hello this is post seed 6',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body: 'Hello this is post seed 7',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_body: 'Hello this is post seed 8',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_body: 'Hello this is post seed 8',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_body: 'Hello this is post seed 9',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body: 'Hello this is post seed 10',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_body: 'Hello this is post seed 11',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_body: 'Hello this is post seed 12',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_body: 'Hello this is post seed 13',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_body: 'Hello this is post seed 14',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_body: 'Hello this is post seed 15',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_body: 'Hello this is post seed 16',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_body: 'Hello this is post seed 17',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_body: 'Hello this is post seed 18',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_body: 'Hello this is post seed 19',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;