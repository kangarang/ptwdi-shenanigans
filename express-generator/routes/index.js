var express = require('express');
var router = express.Router();

var postgresUser = process.env.POSTGRES_USER
var postgresPassword = process.env.POSTGRES_PASSWORD


//include the node postgres library
var pg = require('pg');

var database = new pg.Pool({
    database: 'isaac',
    user: 'postgres',
    password: postgresPassword,
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

var Sequelize = require('sequelize');
var sequelize = new Sequelize(`postgres://postgres@localhost:5432/isaac`)

/* GET home page. */
router.get('/', function (req, res, next) {
    const User = sequelize.define('user', {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        male: Sequelize.BOOLEAN
    });

    User.sync().then(() => {

        User.findById(2).then(row => {
            console.log(row);
        }); // end

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

    //connect to a database
    // pg.connect(`postgres://postgres@localhost:5432/isaac`, function (err, client, done) {
    //     if (err) {
    //         console.log(err.message);
    //     } else {
    //         client.query(`SELECT * FROM users`, function (err, result) {
    //             const users = result.rows;
    //             //let pg know we're done with this client
    //             done();
    //             //close the pg pool entirely.
    //             //this is done so our node process will exit.
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
