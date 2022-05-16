const express = require("express")
const router = express.Router({ mergeParams: true })
const spotifyApi = require("../service/spotify-consumer")

router.get("/", (req, res) => {
    if (req.query["q"]) {
        spotifyApi.searchTracks(req.query["q"]).then(data => {
            res.send(data.body)
        }).catch(err => {
            console.log(`Error while searching tracks, [${req.query["q"]}]: `)
            console.log(err)
            res.send(err)
        })
        return
    }
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


module.exports = router