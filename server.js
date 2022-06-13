import express from "express";
import bodyParser from "body-parser";
import tracksRouter from "./routes/tracks.js";
import mangasRouter from "./routes/mangas.js";
import db from "./src/db.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(express.json());
app.use("/tracks",tracksRouter);
app.use("/mangas",mangasRouter);
db.sync().then(() => {
    console.log(`Database ${process.env.DB_NAME} synced`)
}).catch(err => {
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})