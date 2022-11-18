const { Router } = require("express");
const File = require("../models/Files");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const files = await File.find({}).lean();

    console.log("FILES LIST: ", files);

    res.render("index", {
      title: "Catalog",
      isIndex: true,
      files: files,
    });
  } catch (error) {
    console.log("GET FILES ERROR: ", error);
  }
});

module.exports = router;
