const express = require("express")
const route = express.Router()
const userRoutes = require("./userRoutes")

route.get("/", (req, res) => {
    res.json({
        message: "Selamat Datang Di Express Server"
    })
})

route.use("/users", userRoutes)

module.exports = route