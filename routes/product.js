const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    product: { name: "test123" },
  });
});

module.exports = router;
