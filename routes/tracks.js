import express from "express";
const router = express.Router({ mergeParams: true })

router.get("/", (req, res) => {
    res.send("tracks")
})


router.get("/:id", (req, res) => {
    res.statusCode = 200
    res.send("track")
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


export default router