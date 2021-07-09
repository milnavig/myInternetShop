const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer 1234
        if (!token) {
            return res.status(401).json({message: 'User isn\'t authorized'});
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch(err) {
        res.status(401).json({message: 'User isn\'t authorized'});
    }
}