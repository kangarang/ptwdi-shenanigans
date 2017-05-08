var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgresql://localhost/blog_with_sequelize");

module.exports = sequelize.define(
	"post",
	{
		title:	Sequelize.STRING,
		body:	Sequelize.TEXT,
		slug:	Sequelize.STRING
	},
	{
		defaultScope: {
			order:	[["createdAt", "DESC"]]
		},
		getterMethods: {
			url: function() {
				return `/blog/${this.slug}`;
			}
		}
	}
);

// ###

// module.exports = function(sequelize, Sequelize) {
// 	return(sequelize.define('post', {
// 		title: Sequelize.STRING,
// 		body:  Sequelize.TEXT,
// 		slug:  Sequelize.STRING
// 	}, {
// 		defaultScope: {
// 			order: [['createdAt', 'DESC']]
// 		},
// 	  getterMethods: {
// 			url: function() {
// 				return(`/blog/${this.slug}`);
// 			}
// 	  }
// 	}));
// };
