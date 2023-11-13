const {Sequelize} = require("sequelize")

// const sequelize = new Sequelize({
//     host: `localhost`,
//     dialect: "mysql",
//     username: "root",
//     password: "rafai28112002",
//     database: "sequelize_mudah"
// })

// const sequelize = new Sequelize("verceldb", "default", "CvbDxPm5lIr4" )
// const sequelize = new Sequelize("postgres://default:CvbDxPm5lIr4@ep-throbbing-flower-96445632-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb")
// const sequelize = new Sequelize("postgres://default:CvbDxPm5lIr4@ep-throbbing-flower-96445632.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb")
const sequelize = new Sequelize("verceldb", "default", "CvbDxPm5lIr4", {
    host: "ep-throbbing-flower-96445632-pooler.ap-southeast-1.postgres.vercel-storage.com",
    port: 5432,
    dialect: "postgres",
    logging: false,
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true
        }
    }
})

module.exports = sequelize