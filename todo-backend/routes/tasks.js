const express = require("express");
const router = express.Router();
const db = require("../db/database");

router.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

module.exports = router;
