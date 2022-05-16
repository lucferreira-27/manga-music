const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;
const tracksRouter = require('./routes/tracks');
const mangasRouter = require('./routes/mangas');

app.use(bodyParser.json())
app.use("/tracks",tracksRouter);
app.use("/mangas",mangasRouter);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})