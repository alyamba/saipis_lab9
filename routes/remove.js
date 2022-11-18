const { Router } = require("express");
const File = require("../models/Files");

const router = Router();

router.get("/remove", (req, res) => {
  res.render("remove", {
    title: "Remove",
    isRemove: true,
  });
});
router.post("/remove", async (req, res) => {
  await File.deleteOne({ _id: req.body.id });

  res.redirect("/");
});

module.exports = router;
