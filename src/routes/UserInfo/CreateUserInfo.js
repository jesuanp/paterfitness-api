const { Router } = require('express');
const { User, Userinfo, Op } = require('../../db.js')

const router = Router()

router.post('/:userId', async(req, res) => {

    const { birth, gender, age, stature, weight, occupation, daily_activity, does_he_do_sports, sport_frequency } = req.body;
    const { userId } = req.params

    try {

        const user = await User.findByPk(userId)

        console.log()

        if(!user) {
            return res.status(404).json({msg: 'El usuario no existe'})
        }
        if(user.userinfoId) {
            return res.json({msg: 'La información del usuario ya está completada'})
        }
        
        const userInfo = await Userinfo.create({
            birth: birth.slice(0, 10),
            gender,
            age,
            stature,
            weight,
            occupation,
            daily_activity,
            does_he_do_sports,
            sport_frequency,
            userId: user.id,
            objective: null
        })

        user.userinfoId = userInfo.id
        user.save()

        return res.json({user, userInfo})

    } catch (error) {
        console.log(error)
        console.log('Detalles del error: ', error.parent.detail)
        res.send(error)
    }
})

module.exports = router
