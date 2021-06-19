const db = require('../db/db.js')


let login = async (req, res, next) => {

    console.log('loging in.....')
    let user = await checkUserCredentials(req.body)
    req.LoggedUser = user
    next()

}

let checkUserCredentials = async (body) => {
    ///get the user from the database

    let userResult = await db.promise().query('SELECT * FROM `users` WHERE `EMAIL` = ? AND `PASSWORD` = ?', [body.email.toString(), body.password.toString()], function (err, results) {

        return results

    })

    let data = (userResult[0][0])
    data = JSON.parse(JSON.stringify(data))
    delete data.PASSWORD
    delete data.REGISTERED_ON
    delete data.id

    return data
}

module.exports = login;