var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const PORT = process.env.PORT || 3000;

//All Router imports
var auth = require('./api/admin/auth');
var category = require('./api/admin/category');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Admin Routes
app.use('/api/admin', auth);
app.use('/api/admin/categories', category);


//Frontend Routes
app.get('/', function(req, res) {
    res.send("Home Page");
});

app.listen(PORT, () => console.log(`Server is up & runing on port:${PORT}!`))