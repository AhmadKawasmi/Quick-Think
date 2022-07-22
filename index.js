const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cors = require("cors")
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to DataBase"))

const Schema = mongoose.Schema

const thinkSchema = new Schema({
    anything: String,

})

const Anything = mongoose.model("anything", thinkSchema)

app.get("/", async function(req, res) {
    const allThings = await Anything.find({})
    res.send(allThings)
})

app.post("/", async function(req, res) {
    const { anything } = req.body
    const anythingDB = new Anything({ anything })

    const response = await anythingDB.save()
    res.send(response)
})


app.listen(PORT, function() {
    console.log("Up and running on port : " + PORT);
})