const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ msg: "Please provide email and password" });
  }

  jwt.sign(
    { username },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    },
    (err, token) => {
      if (err) {
        return res.status(400).json({ msg: err.message });
      } else {
        return res.status(200).json({ token });
      }
    }
  );
};

const hello = async (req, res) => {
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
  });
};

module.exports = {
  logon,
  hello,
};
