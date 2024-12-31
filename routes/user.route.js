const express = require('express')
const userModel = require('../models/user.model')
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', (req,res) => {
    res.render("index")
})
router.post('/form', 
    body('email').trim().isEmail(),
    body('username').trim().isLength({min:2}),
    body('password').trim().isLength({min:3}),
    async (req,res) => {

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            })
        }

        const { username, email, password } = req.body
        const newUser = await  userModel.create({
            email,
            username,
            password
        })
    console.log(req.body)
    res.json(newUser)
})

module.exports = router;