const validator = require('validator')


const validate = async (req, res, next) => {

    let result = await checkUser(req.body)


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

                return reject("Email/Phone Number not Valid")
            }

            errors.data = data
            return resolve(errors)

        } else {
            return reject('All Fields are required')
        }

    })

}



module.exports = validate