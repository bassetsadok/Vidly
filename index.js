const Joi = require("joi")
const express = require("express")
const app = express()
const genres = require("./routes/genres")

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use("/api/genres", genres)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`app is running on port ${port}`)
})
