'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
		// queryInterface.createTable('posts', {
		// 	id: {
		// 		type:          Sequelize.INTEGER,
		// 		primaryKey:    true,
		// 		autoIncrement: true
		// 	},
		// 	title:     Sequelize.STRING,
		// 	body:      Sequelize.TEXT,
		// 	slug:      Sequelize.STRING,
		// 	createdAt: Sequelize.DATE,
		// 	updatedAt: Sequelize.DATE
		// });
  },

  down: function (queryInterface, Sequelize) {
    // queryInterface.dropTable('posts');
  }
};