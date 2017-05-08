'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addColumn('posts', 'author', Sequelize.STRING);
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('posts', 'author');
    }
};
