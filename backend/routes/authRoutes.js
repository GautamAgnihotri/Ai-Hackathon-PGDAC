const express = require("express");
const jwt = require("jsonwebtoken");
const pool = require("../db/db");
const router = express.Router();

const result = require("../utils/result");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log({ email, password });

  const sql = `SELECT * FROM members WHERE email = ? AND passwd = ? AND role = ?`;
  pool.query(sql, [email, password, "librarian"], (error, data) => {
    if (data) {
      if (data.length != 0) {
        const payload = {
          userId: data[0].id,
        };
        const token = jwt.sign(payload, "k2so4.al2(so4)3.24h20");
        const body = {
          token: token,
          name: data[0].name,
        };
        res.send(result.createSuccessResult(body));
      } else res.send(result.createErrorResult("Invalid email or password"));
    } else res.send(result.createErrorResult(error));
  });
});

// router.post("/logout", async (req, res) => {
//   // TODO: Implement logout
// });

module.exports = router;
