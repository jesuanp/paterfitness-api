const { Router } = require('express');
const { User, Userinfo, Op } = require('../../db.js');

const router = Router()

router.get('/:id', async(req, res) => {

    const { id } = req.params
    const { objective } = req.query

    if(objective) {
        let userinfo = await Userinfo.findByPk(id)
        userinfo.objective = objective
        userinfo.save()

        const user = await User.findOne({
            where: {
                id: userinfo.userId
            },
            include: [{
                model: Userinfo
            }]
        })

        return res.json({userinfo, user})
    }

    try {

        const userinfo = await Userinfo.findOne({
            where: {
                id: id
            },
            include: [{
                model: User
            }]
        })

        if(!userinfo) {
            return res.json({msg: 'La información no existe'})
        }

        const user = await User.findByPk(userinfo.userId)

        return res.json({userinfo, user})

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router
