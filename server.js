require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
