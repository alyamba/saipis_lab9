const { Router } = require('express')
const File = require("../models/Files");

const router = Router()

router.get('/create', (req, res) => {
  res.render('create', {
    title: "Create",
    isCreate: true
  })
})

router.post('/create', async (req, res) => {
  try {
    const file = new File({
      parent: req.body.parent,
      title: req.body.title,
      size: req.body.size,
      date: req.body.date,
    })
    
    await file.save()
    res.redirect('/')
  } catch (error) {
    console.log('FILE CREATION ERROR: ', error)
  }
})

module.exports = router