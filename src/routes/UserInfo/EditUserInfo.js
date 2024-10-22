const { Router } = require('express');
const { User, Userinfo, Op } = require('../../db.js')

const router = Router()

router.put('/:userId', async(req, res) => {

    const { birth, gender, age, stature, weight, occupation, dailyActivity, doesHeDoSports, sportFrequency } = req.body;
    const { userId } = req.params

    try {

        const user = await User.findByPk(userId)
        if(!user) {
            return res.json({msg: 'El usuario no existe'})
        }

        const userInfo = await Userinfo.findByPk(user.userInfoId)
        if(!userInfo) {
            return res.json({msg: 'El existe la información del usuario'})
        }

        userInfo.update({
            birth,
            gender,
            age,
            stature,
            weight,
            occupation,
            dailyActivity,
            doesHeDoSports,
            sportFrequency
        })

        userInfo.save()

        return res.json({userInfo})

    } catch (error) {
        console.log(error)
        console.log('Detalles del error: ', error.parent.detail)
        res.send(error)
    }
})

module.exports = router
