const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = { id: user._id, email: user.email };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { generateToken, verifyToken };
