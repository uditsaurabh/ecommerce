const router = require("express").Router();

router.get("/", (req, res) => {
  return res.send("product route found");
});

module.exports = router;
