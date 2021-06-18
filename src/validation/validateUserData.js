const validator = require('validator')


const validate = async (req, res, next) => {
    try {
        let result = await checkUser(req.body)
        req.user = req.body
        next()

    } catch (err) {

        res.status(500).send(err)

    }

}



//// check user details
const checkUser = (data) => {
    let errors = {}
    return new Promise((resolve, reject) => {
        if (data.hasOwnProperty('name') && data.hasOwnProperty('email') && data.hasOwnProperty('phone') && data.hasOwnProperty('password') && data.hasOwnProperty('role')) {
            try {
                errors.email = validator.isEmail(data.email);
                errors.phone = validator.isMobilePhone(data.phone);
            } catch (err) {

                return reject('500')
            }

        } else {
            return reject('All Fields are required')
        }

        if ((errors.email == true) && (errors.phone == true)) {
            return resolve(data)

        } else {
            return reject('Email || Password Data Type Mis Match')
        }

    })

}



module.exports = validate