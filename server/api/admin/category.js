var express = require('express')
const categoryRotuer = express.Router();
const db = require('../../database/connection');
const middleware = require('./../middleware');

var dateFormat = require('dateformat');
var now = new Date();


// Route For All get categories
categoryRotuer.get('/lists', middleware.verifyToken, (req, res) => {
    let result = db.query('SELECT * FROM categories WHERE `status` = "1"', (error, result, fields) => {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }

        res.status(200).send({ success: true, data: result });
    });
});


// Route For get One categories
categoryRotuer.get('/list/:categoryId', middleware.verifyToken, (req, res) => {
    if ((typeof(req.params.categoryId) == 'undefined') || (parseInt(req.params.categoryId) == 'NaN')) {
        res.status(200).send({ success: false, message: "Invalid category id" });
    }

    let result = db.query('SELECT * FROM categories WHERE `id` = "' + req.params.categoryId + '" AND `status`="1"', (error, result, fields) => {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }
        res.status(200).send({ success: true, data: result });
    });
});

// Route For create One category
categoryRotuer.post('/create', middleware.verifyToken, (req, res) => {
    let body = req.body;
    body.created_at = dateFormat(now, "yyyy-mm-dd hh:MM:ss");
    body.updated_at = dateFormat(now, "yyyy-mm-dd hh:MM:ss");
    db.query('INSERT INTO categories SET ?', req.body, (error, result, fields) => {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }
        res.status(200).send({ success: true, message: 'New Category created' });
    });
});


// Route For update One category
categoryRotuer.post('/update/:categoryId', middleware.verifyToken, (req, res) => {
    let body = req.body;
    if (typeof(req.params.categoryId) == 'undefined') {
        res.status(200).send({ success: false, message: "Invalid category id" });
    }

    db.query("SELECT * FROM categories WHERE `id`= '" + req.params.categoryId + "'", function(error, results) {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }

        if (results.length == 0) {
            res.status(200).send({ success: false, message: 'Invlaid category ID' })
        }

        db.query("UPDATE categories SET ? WHERE ?", [body, { id: req.params.categoryId }], function(error, result) {
            if (error) {
                res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
            }
            res.send({ success: true, message: 'Category updated successfully' });
        });
    });
});

// Route For delete One category
categoryRotuer.delete('/delete/:categoryId', middleware.verifyToken, (req, res) => {
    let body = req.body;
    if (typeof(req.params.categoryId) == 'undefined') {
        res.status(200).send({ success: false, message: "Invalid category id" });
    }

    db.query("SELECT * FROM categories WHERE `id`= '" + req.params.categoryId + "'", function(error, results) {
        if (error) {
            res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
        }

        if (results.length == 0) {
            res.status(200).send({ success: false, message: 'Invlaid category ID' })
        }

        db.query("DELETE FROM categories WHERE `id` = '" + req.params.categoryId + "'", function(error, result) {
            if (error) {
                res.status(500).send({ success: false, message: "DB Error : " + error.sqlMessage });
            }
            res.send({ success: true, message: 'Category deleted successfully' });
        });
    });
});

module.exports = categoryRotuer;