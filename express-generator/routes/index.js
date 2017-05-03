var express = require('express');
var pg = require('pg');
var Sequelize = require('sequelize');

var router = express.Router();

var postgresUser = process.env.POSTGRES_USER
var postgresPassword = process.env.POSTGRES_PASSWORD
// var postgresURL = process.env.DATABASE_URL
// var pgURI = process.env.PG_DB_URI

var database = new pg.Pool({
    database: 'isaac',
    user: 'postgres',
    password: postgresPassword,
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

// Sequelize docs
// http://docs.sequelizejs.com/en/v3/docs/querying/

// Create one instance of pg database
// using database URI
const sequelize = new Sequelize(`postgres://postgres@localhost:5432/isaac`)

// using params
// const sequelize = new Sequelize('database', 'user', 'password', {
//     host: 'localhost',
//     dialect: 'postgres',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
//     storage: 'path/to/db.db'
// })

// GET request to home page ('/')
router.get('/', function (req, res, next) {

    // Create the User model
    // Models are defined with sequelize.define('name', {attributes}, {options})
    const User = sequelize.define('user', {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        male: Sequelize.BOOLEAN
    });

    // Create the User table
    User.sync().then(() => {

        // Sequelize uses promises
        // Always use .then() because promises are asynchronous
        User.findById(2).then(row => {
            console.log(row);
            // console.log(row.get('first_name'))
        }); // end

        // Create a row in the User table
        User.create({
            first_name: 'isaac',
            last_name: 'kang',
            age: 50,
            male: true
        }); // end

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
