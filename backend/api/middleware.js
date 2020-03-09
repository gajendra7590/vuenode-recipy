var jwt = require('jsonwebtoken');
const config = require('../config/config');
module.exports = {
    verifyToken: function(req, res, next) {
        let headerToken = req.headers.authorization;
        if ((typeof(headerToken) == 'undefined') || (headerToken == '')) {
            res.status(401).send({ success: false, message: 'UnAuthorised Request' });
        }

        if (!(headerToken.startsWith("Bearer "))) {
            res.status(401).send({ success: false, message: 'UnAuthorised Request' });
        }
        let token = headerToken.split(' ')[1];
        if (token == '') {
            res.status(401).send({ success: false, message: 'UnAuthorised Request' });
        }

        jwt.verify(token, config.apiKey, function(err, decoded) {
            if (err) {
                res.status(401).send({ success: false, message: 'UnAuthorised Request' });
            }
            req.loggedEmail = decoded.email;
            next();
        });
    }
}