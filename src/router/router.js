const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const validate = require('../validation/validateUserData.js')
const registerUser = require('../middleware/registerUser.js')
const login = require('../middleware/login.js')
const createClass = require('../middleware/createClass.js')
let deleteClass = require('../middleware/deleteClass.js')

const router = new express.Router()


router.post('/', async (req, res) => {

    res.status(200).json({ msg: 'HomeJam' });

});

router.post('/register', validate, registerUser, async (req, res) => {

    res.status(200).send('User Created')

})

router.post('/login', login, async (req, res) => {

    res.status(200).json(req.LoggedUser)

})

router.post('/createClass', createClass, async (req, res) => {
    res.status(200).send('Class Created')

})

router.delete('/deleteClass', deleteClass, async (req, res) => {
    res.status(200).send('Class Deleted')
})


module.exports = router