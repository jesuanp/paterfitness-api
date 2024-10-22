const { Router } = require('express');

// Importing routes user
const routerCreateUser = require('./User/CreateUser.js')
const routerDeleteUser = require('./User/DeleteUser.js')
const routerFindUser = require('./User/FindUser.js')
const routerFindAllUsers = require('./User/FindAllUsers.js')

// Importing routes userInfo
const routerCreateUserInfo = require('./UserInfo/CreateUserInfo.js')
const routerFindUserInfo = require('./UserInfo/FindUserInfo.js')
const routerEditUserInfo = require('./UserInfo/EditUserInfo.js')

const router = Router()

router.use('/user', routerCreateUser)
router.use('/user', routerDeleteUser)
router.use('/user', routerFindUser)
router.use('/users', routerFindAllUsers)

router.use('/user-info', routerCreateUserInfo)
router.use('/user-info', routerFindUserInfo)
router.use('/user-info', routerEditUserInfo)

module.exports = router
