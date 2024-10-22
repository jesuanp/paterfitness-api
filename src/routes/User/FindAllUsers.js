const { Router } = require('express');
const { User, Op } = require('../../db.js')

const router = Router()

router.get('/', async(req, res) => {

    try {
        const users = await User.findAll()

        if(!users.length) {
            return res.json({msg: 'No hay usuarios en la base de datos'})
        }

        return res.json(users);

    } catch (error) {
        console.log(error)
        console.log('Detalles del error: ', error.parent.detail)
        res.send(error)
    }
})

module.exports = router
