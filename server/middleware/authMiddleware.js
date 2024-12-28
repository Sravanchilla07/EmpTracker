const jwt = require('jsonwebtoken');

const authMiddleware = (allowedRoles) => (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send('Access denied');

    try {
        const decoded = jwt.verify(token, 'secretKey');
        req.user = decoded;
        if (allowedRoles && !allowedRoles.includes(decoded.role)) {
            return res.status(403).send('Forbidden');
        }
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

module.exports = authMiddleware;
