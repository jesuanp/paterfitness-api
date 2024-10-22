const { Router } = require('express');
const { User, Userinfo, Op } = require('../../db.js')

const router = Router()

router.get('/', async(req, res, next) => {

    // This code creates a username from the email
    const generateUserName = (email) => {
        let username = '';
        for(let i = 0; i < email.length; i++) {
            if(email[i] === '@') return username;
    
            username += email[i];
        }
        return username;
    }

    const { email, username, id } = req.query

    console.log(req.query)

    if(!email && !username){
        return res.json({msg: 'Faltan parametros'})
    }

    try {

        let user

        if(email) {
            user = await User.findOne({
                where: {
                    email
                },
                include: [{
                    model: Userinfo
                }]
            })
        }
        else if(username) {
            user = await User.findOne({
                where: {
                    username
                },
                include: [{
                    model: Userinfo
                }]
            })
        }

        if(!user) {
            // return res.json({msg: 'No existe el usuario'})

            user = await User.create({
                email,
                username: generateUserName(email)
            })
        }

        return res.json(user);

    } catch (error) {
        console.log(error)
        console.log('Detalles del error: ', error.parent.detail)
        res.send(error)
    }
})

module.exports = router
