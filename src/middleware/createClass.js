const db = require('../db/db.js')


let createClass = async (req, res, next) => {
    let body = req.body
    let class_ID = await classID(body.CLASS_NAME)
    console.log(class_ID)

    try {

        let calss = await db.promise().query('INSERT INTO `classes` (CLASS_NAME, INSTRUCTOR,CLASS_UID) VALUES(?,?,?)', [body.CLASS_NAME.toString(),
        body.INSTRUCTOR.toString(), class_ID])

        next()
    } catch (err) {

        res.status(500).send('Something is Wrong')

    }


}

let classID = async (name) => {

    return name.substr(0, 4) + Math.random().toString(36).substr(8, 9);
}


module.exports = createClass