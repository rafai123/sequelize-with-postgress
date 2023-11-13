const user = require("../models/users")

module.exports = {
    getAllUsers : async (req, res) => {
        const users = await user.findAll()
        res.json({
            message: "Berhasil mendapatkan data users",
            data: users
        })
    },

    getUserById: (req, res) => {
        res.json({
            message: "berhasil mendapatkan data user berdasarkan ID",
        })
    },

    addUser: async (req, res) => {
        const data = req.body

        // if user.email have been added cannot upload
        const users = await user.findAll({
            where: {
                email: data.email
            }
        })

        

        if (users.length > 0 ) {
            res.json({
                message: `email: ${data.email} telah di daftarkan, silahkan pilih email lain!`
            })
            return res.end()
        }

        // const newUser = await user.create({
        //     name : data.name,
        //     email : data.email,
        //     password: data.password,
        //     hobby: data.hobby
        // })

        try {
            const newUser = await user.create(data)
            res.json({
                message: `${data.name} berhasil di tambahkan dengan id: ${newUser.id}`
            })
            return res.end
        } catch (e) {
            res.json({
                message: "Gagal menambahkan user. error " + e,
            })
            return res.end
        }

    },

    deleteUser: async (req, res) => {
        // const data = req.body
        const dataId = param

        const users = user.findAll({
            where: {
                id: data.id
            }
        })

        console.log("isi user adalah : ", users)
        console.log((users.length > 0))

        if (users.length == 0 ) {
            res.json({
                message: "User tidak ada"
            })
            return res.end()
        }

        const deletedUser = await user.destroy({
            where: {
                id: data.id
            }
        })

        console.log(deletedUser)
        res.json({
            message: `${deletedUser.id} berhasil di hapus`
        })
    }
}