const db = require('../db/db.js')


let deleteClass = async (req, res, next) => {



    let body = req.body
    console.log(body)
    try {
        let sql = "DELETE FROM classes WHERE CLASS_UID='" + body.CLASS + "'"
        console.log(sql)

        db.query(sql, function (err, result) {
            if (err) return err;
            else next()
        });
    } catch (err) {
        res.status(500).send('Something is Wrong')

    }
}
module.exports = deleteClass