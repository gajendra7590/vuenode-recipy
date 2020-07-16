var express = require('express')
var jwt = require('jsonwebtoken');
var sgMail = require('@sendgrid/mail');
var randomstring = require("randomstring");


const authRotuer = express.Router();
const db = require('../../database/connection');
var config = require('../../config/config');
const middleware = require('./../middleware');

// Route For Login
authRotuer.post('/login', (req, res) => {
    let result = db.query('SELECT id,first_name,last_name,display_name,email,image,role FROM users WHERE `email` = "' + req.body.email + '" AND `password` = "' + req.body.password + '"', (error, result, fields) => {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }
        if (result.length == 0) {
            res.status(200).send({ success: false, message: "Email Or password is invalid" });
        } else {
            var token = jwt.sign({ email: result[0].email }, config.apiKey, { expiresIn: 60 * 60 }, { algorithm: 'RS256' }, (err, token) => {
                if (err) {
                    res.status(500).send({ success: false, message: "DB Error : " + err });
                }
            });
            res.status(200).send({
                success: true,
                token: token,
                user: result[0],
                message: 'Logged in success'
            });
        }
    });

});

// Route For Get User Profile
authRotuer.post('/forgot-password', (req, res) => {
    db.query('SELECT * FROM users WHERE `email` = "' + req.body.email + '"', (error, result, fields) => {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }
        if (result.length == 0) {
            res.status(200).send({ success: false, error: 'This email { ' + req.email + ' } does not exist' });
        } else {
            let resetToken = randomstring.generate();
            db.query('UPDATE users SET resetToken = ? WHERE id = ?', [resetToken, result[0].id], (error, result, fields) => {
                if (error) {
                    res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
                }

                sgMail.setApiKey(config.sendGridApiKey);
                const msg = {
                    to: 'gajendra+01@bitcot.com',
                    from: 'gajendra@bitcot.com',
                    subject: 'Sending with SendGrid is Fun',
                    text: 'and easy to do anywhere, even with Node.js',
                    html: '<p><strong>Forgot Password Link </strong> </p>' +
                        '<p> Reset Password Link : <a href=' + config.adminBaseURL + '/set-new-password?token=' + resetToken + '>Reset Password</a></p>',
                }

                let status = sgMail.send(msg).then(() => {
                    console.log('Message sent')
                }).catch((error) => {
                    console.log(error.response.body)
                        // console.log(error.response.body.errors[0].message)
                })

            });

            res.status(200).send('ddddd');
        }
    });
});


// Route For Get User Profile
authRotuer.post('/set-new-password', (req, res) => {
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