const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "unauthorized" });
    } else {
      const { username } = decoded;
      req.user = { username };
      next();
    }
  });
};

module.exports = authenticationMiddleware;
