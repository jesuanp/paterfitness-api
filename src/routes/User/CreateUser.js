const { Router } = require('express');
const { User, Op } = require('../../db.js')

const router = Router()

router.post('/', async(req, res) => {

    const { email, username } = req.body

    if(!email || email.trim() == '' || !username || username.trim() == ''){
        return res.json({msg: 'Faltan parametros'})
    }

    try {

        const user = await User.findOne({
            where: {
                [Op.or]: [
                    {
                        email
                    },
                    {
                        username
                    }
                ]
            }
        })
        if(user) {
            return res.json({msg: 'Ya existe un usuario con éste correo o nombre'})
        }
        
        const newUser = await User.create({
            email,
            username
        })

        return res.send(newUser);

    } catch (error) {
        console.log(error)
        console.log('Detalles del error: ', error.parent.detail)
        res.send(error)
    }
})

module.exports = router
