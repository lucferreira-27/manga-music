const express = require("express")
const router = express.Router({ mergeParams: true })


router.get("/", (req, res) => {
    res.send("mangas")
})

router.get("/:id", (req, res) => {
    res.statusCode = 200
    res.send("manga")
})
router.post("/", (req, res) => {
    console.log(req.body)
    res.statusCode = 201
    res.send(req.body)
})

router.put("/:id", (req, res) => {
    res.statusCode = 200
    res.send(req.body)
})

router.delete("/:id", (req, res) => {
    res.statusCode = 200
    res.send(req.body)
})



module.exports = router