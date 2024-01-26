const express = require("express");
const router = express.Router();

router.get("/todos", (req, res) => {
  const todos = [
    { id: 1, name: "Pay electric bill", completed: false },
    { id: 2, name: "Walk the dog", completed: false },
  ];
  res.send(todos);
});

module.exports = router;
