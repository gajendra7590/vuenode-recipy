var express = require('express')
var jwt = require('jsonwebtoken');
const authRotuer = express.Router();
const db = require('../database/connection');
var config = require('../config/config');
const middleware = require('../api/middleware');

// Route For Login
authRotuer.post('/login', (req, res) => {
    let result = db.query('SELECT * FROM user WHERE `email` = "' + req.body.email + '" AND `password` = "' + req.body.password + '"', (error, result, fields) => {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }
        if (result.length == 0) {
            res.status(200).send({ success: false, message: "Email Or password is invalid" });
        }

        var token = jwt.sign({ email: result[0].email }, config.apiKey, { expiresIn: 60 * 60 }, { algorithm: 'RS256' }, (err, token) => {
            if (err) {
                res.status(500).send({ success: false, message: "DB Error : " + err });
            }
        });
        res.status(200).send({ success: true, token: token, message: 'Logged in success' });
    });

});

// Route For Register
authRotuer.post('/register', (req, res) => {
    db.query('INSERT INTO user SET ?', req.body, (error, result, fields) => {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }
        var token = jwt.sign({ email: req.body.email }, config.apiKey, { expiresIn: 60 * 60 }, { algorithm: 'RS256' }, (err, token) => {
            if (err) {
                res.status(500).send({ success: false, message: "DB Error : " + err });
            }
        });
        res.status(200).send({ success: true, token: token, message: 'Register success' });
    });
});

// Route For Get User Profile
authRotuer.get('/user', middleware.verifyToken, (req, res) => {
    db.query('SELECT id,first_name,last_name,email,phone,status FROM user WHERE `email` = "' + req.loggedEmail + '"', (error, result, fields) => {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }

        if (result.length > 0) {
            result = result[0];
        }
        res.status(200).send({ success: true, data: result });
    });
});


module.exports = authRotuer;