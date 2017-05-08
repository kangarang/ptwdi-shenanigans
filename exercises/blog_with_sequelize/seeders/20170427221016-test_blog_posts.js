'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return(queryInterface.bulkInsert('posts', [
      {
        title: 'Welcome to my blog!',
        body:  'This is my first blog post!',
        slug:  'welcome-to-my-blog'
      }, {
        title: 'Something else',
        body:  'Wow, this blog is so great.',
        slug:  'something-else'
      }, {
        title: 'Not sure what to write about today',
        body:  'Writing a blog is kind of hard…',
        slug:  'not-sure-what-to-write-about-today'
      }, {
        title: 'Here is a new page',
        body:  'Whatever',
        slug:  'here-is-a-new-page'
      }
    ]));
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('posts');
  }
};