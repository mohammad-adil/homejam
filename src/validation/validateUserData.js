const validator = require('validator')


const validate = async (req, res, next) => {
    try {

        let result = await checkUser(req.body)
        console.log(result)
    } catch (err) {

        console.log(err)

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

                return reject('Internal Error')
            }

        } else {
            return reject('All Fields are required')
        }

        if (errors.email == "false" && errors.phone == "false") {
            console.log(errors.email + ' ' + errors.phone)
            return reject('Email || Password Validation error')


        } else {
            console.log("all well ")
        }


        errors.data = data
        return resolve(errors)

    })

}



module.exports = validate