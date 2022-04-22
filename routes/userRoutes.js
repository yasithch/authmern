const express = require('express')
const router=express.Router()
// const { default: mongoose } = require('mongoose')

const {registerUser, loginUser,getMe}=require('../controllers/userController')
const {protect}=require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)


module.exports=router

//npm i bcryptjs
//npm i jsonwebtoken
