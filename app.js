const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./routes/userRoutes")

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));

app.use(router)

app.listen(3000);


