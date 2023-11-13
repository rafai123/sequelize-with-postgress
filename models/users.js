const express = require("express");
const sequelize = require("./../config/db");
const { Sequelize, DataTypes } = require("sequelize");

const user = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hoby: DataTypes.STRING
},{
    // freezeTableName: true
})

module.exports = user