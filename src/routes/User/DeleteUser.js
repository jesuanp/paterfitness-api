const { Router } = require('express');
const { User, Userinfo } = require('../../db.js')

const router = Router()

router.delete('/:id', async(req, res) => {

    const { id } = req.params

    if(!email || email.trim() == ''){
        return res.json({msg: 'Faltan el correo'})
    }

    try {

        const user = await User.findOne({
            where: {
                id
            }
        })

        await Userinfo.destroy({
            where: {
                id: user.userinfoId
            }
        })

        await user.destroy()

        return res.json({msg: 'Usuario eliminado'});

    } catch (error) {
        console.log(error)
        console.log('Detalles del error: ', error.parent.detail)
        res.send(error)
    }
})

module.exports = router
