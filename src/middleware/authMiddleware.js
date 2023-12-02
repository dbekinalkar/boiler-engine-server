const admin = require('../utils/firebase');

const authMiddleware = {
  async verifyToken(req, res, next) {
    const idToken = req.headers.authorization;
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
  },
};

module.exports = authMiddleware;
