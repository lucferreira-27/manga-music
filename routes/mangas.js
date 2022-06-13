import express from "express";
const router = express.Router({ mergeParams: true })
import mangas from "../src/controllers/mangaController.js";


router.get("/", (req, res) => {
    mangas.findAll().then(mangas => {
        res.statusCode = 200
        res.send(mangas)
    }).catch(err => {
        res.statusCode = 500
        res.send(err)
    })
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



export default router