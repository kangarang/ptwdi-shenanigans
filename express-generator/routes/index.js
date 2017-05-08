var express = require('express');
var pg = require('pg');
var Sequelize = require('sequelize');

var router = express.Router();

var pgUser = process.env.POSTGRES_USER
var pgPassword = process.env.POSTGRES_PASSWORD

// Sequelize docs
// http://docs.sequelizejs.com/en/v3/docs/querying/

// Create an instance of pg database
const sequelize = new Sequelize(`postgres://${pgUser}:${pgPassword}@localhost/bulletinboard`)

// GET request to home page ('/')
router.get('/', function (req, res, next) {

    // Create the User model if it's not defined
    // Store in a constant User
    // Models are defined with sequelize.define('name', {attributes}, {options})
    const User = sequelize.define('user', {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        male: Sequelize.BOOLEAN
    });

    // Recognize the User table
    User.sync().then(() => {

        // Sequelize uses promises
        // Always use .then() because promises are asynchronous
        // User.findById(2).then(row => {
        //     console.log(row);
        //     // console.log(row.get('first_name'))
        // }); // end

        // Create a row in the User table
        User.create({
            first_name: 'isaac',
            last_name: 'kang',
            age: 50,
            male: true
        }).then(user => {
            res.render('index', {user: user})
        })

        // % wild card
        // ILIKE is case-insensitive

        // Hat.findAll({
        //     where: {
        //         name: {
        //             iLike: 'cow%';
        //         }
        //     }
        // }).then(function (rows) {
        //     // work with returned data
        // })

        // User.findOne({
        //     where: {
        //         first_name: 'isaac'
        //     }
        // }).then(user => {
        //     user.update({
        //         age: 50000
        //     });
        // })

    }); // end User.sync

    // - OR - //

    // connect to a database
    // pg.connect(`postgres://postgres@localhost:5432/isaac`, function (err, client, done) {
    //     if (err) {
    //         console.log(err.message);
    //     } else {
    //         client.query(`SELECT * FROM users`, function (err, result) {
    //             const users = result.rows;
    //             // let pg know we're done with this client
    //             done();
    //             // close the pg pool entirely.
    //             // this is done so our node process will exit.
    //             pg.end();
    //         });
    //     }
    // });

    // database.query('SELECT * FROM users', function (error, result) {
    //     if (error) {
    //         console.log('error: ' + error.message);
    //     } else {
    //         console.log(result.rows);
    //     }
    //     res.render('users', { users: result.rows });
    // });

});

module.exports = router;
