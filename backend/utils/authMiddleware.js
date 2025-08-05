const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, "k2so4.(al2(so4)3.24h20");
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

module.exports = { authMiddleware };
