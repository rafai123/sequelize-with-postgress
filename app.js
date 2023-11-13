const express = require("express")
const app = express()
const routes = require("./routes")

const PORT = process.env.PORT || 3000

const sequelize = require("./config/db")
const user = require("./models/users")

// panggil routes
app.use(express.json())
app.use(routes)

async function initOrm() {
    try {
        await sequelize.authenticate()
        console.log("connection has been successfully")
        user.sync()
        console.log("All models were synchronized successfully")
    } catch(e) {
        console.error("Unable to connect to the database :", e)
    }
}
initOrm()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})