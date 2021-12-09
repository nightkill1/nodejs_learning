const router = require("express").Router()

router.get("/usertest", (req, res) => {
    res.send("user test is successfull")
})

router.post('/userposstest', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log(username)
})

module.exports = router

