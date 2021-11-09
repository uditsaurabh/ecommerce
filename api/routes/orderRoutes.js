const router = require("express").Router();

router.get("/", (req, res) => {
  return res.send("order route found");
});

module.exports = router;
