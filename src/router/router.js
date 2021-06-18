const db = require('../db/db.js')
const express = require('express')
const mysql = require('mysql2')
const validate = require('../validation/validateUserData.js')

const router = new express.Router()


router.post('/', async (req, res) => {

    res.status(200).json({ msg: 'User created' });

});

router.post('/register', validate, async (req, res) => {



})

module.exports = router