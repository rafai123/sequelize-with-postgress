const express = require("express")
const route = express.Router()

const {getAllUsers, getUserById, addUser, deleteUser} = require("../controller/userController")

route.get("/", getAllUsers)
route.get("/:id", getUserById)
route.post("/", addUser)
route.delete("/:id", deleteUser)

module.exports = route