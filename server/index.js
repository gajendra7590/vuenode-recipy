var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const PORT = 3000;

//All Router imports
var auth = require('./api/auth');
var category = require('./api/category');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', auth);
app.use('/api/categories', category);

app.get('/', function(req, res) {
    res.send("Home Page");
});

app.listen(PORT, () => console.log(`Server is up & runing on port:${PORT}!`))