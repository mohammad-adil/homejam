const db = require('../db/db.js')



const registerUser = async (req, res, next) => {
    let uniqueID = await pID(req.user.name);
    const user = req.user
    let sql = "INSERT INTO users (USER_ID, NAME,EMAIL,PHONE, PASSWORD,ROLE) VALUES ('" + uniqueID + "','" + user.name + "','" + user.email + "','" + user.phone + "','" + user.password + "','" + user.role + "')";

    try {

        db.query(sql, function (err, result) {
            if (err) return err;
            else return ('User Created')
        });
    } catch (err) {

    }


}


let pID = function (name) {

    return name.substr(0, 4) + Math.random().toString(36).substr(8, 9);
}

module.exports = registerUser