var express = require('express');

var Post    = require('../models/post');

// var models  = require('../models/index');
// var Post    = models.post;

var router  = express.Router();

// Index.
router.get('/', function(request, response) {
	Post.findAll().then(function(posts) {
		response.render('blog/index', {
			posts: posts
		});
	});
});

// Search.
router.get('/search', function(request, response) {
	var query     = request.query.query;
	var condition = `%${query}%`;

	Post.findAndCountAll({
		where: {
			$or: {
				title: {
					$iLike: condition
				},
				body: {
					$iLike: condition
				}
			}
		}
	}).then(function(result) {
		response.render('blog/search', {
			query: query,
			count: result.count,
			posts: result.rows
		});
	});
});

// Create.
router.post('/', function(request, response) {
	Post.create({
		title: request.body.title,
		body:  request.body.body,
		slug:  request.body.slug
	}).then(function(post) {
		response.redirect(post.url);
	});
});

// New.
router.get('/new', function(request, response) {
	response.render('blog/new');
});

// Show.
router.get('/:slug', function(request, response) {
	Post.findOne({
		where: {
			slug: request.params.slug
		}
	}).then(function(post) {
		response.render('blog/show', {
			post: post
		});
	});
});

module.exports = router;