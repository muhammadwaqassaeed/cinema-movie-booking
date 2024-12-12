// Example middleware for admin authentication (authMiddleware.js)
const isAdmin = (req, res, next) => {
    // Check if the user is authenticated and has admin privileges
    if (req.user && req.user.role === 'admin') {
      return next();
    } else {
      return res.status(403).json({ error: 'Unauthorized' });
    }
  };
  
  module.exports = isAdmin;
  