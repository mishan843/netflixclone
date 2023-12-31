const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const userRoute = require("./routes/UserRoute")

const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB connected");
})

app.use('api/auth' ,userRoute)

app.listen(6000, console.log("server started"));