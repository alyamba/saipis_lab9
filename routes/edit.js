const { Router } = require("express");
const File = require("../models/Files");

const router = Router();

router.get("/edit", (req, res) => {
  res.render("edit", {
    title: "Edit",
    isEdit: true,
  });
});

router.post("/edit", async (req, res) => {
  const editingFile = await File.findById(req.body.id);

  console.log(req.body);

  if (req.body.title) {
    editingFile.title = req.body.title;
  }
  if (req.body.parent) {
    editingFile.parent = req.body.parent;
  }
  if (req.body.size) {
    editingFile.size = req.body.size;
  }
  if (req.body.date) {
    editingFile.date = req.body.date;
  }

  await editingFile.save();

  res.redirect("/");
});

module.exports = router;
