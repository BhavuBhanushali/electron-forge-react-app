const { db } = require("./db")

const checkEmailExists = async (param) => {
    try {
        let query = `SELECT * FROM login WHERE email=?`
        const response = await db.prepare(query).get(param.email)
        console.log("response=-=-=->>", response);
        return response
    } catch (error) {
        console.log("error=-=-=->>", error);
        return error
    }
}

module.exports = { checkEmailExists }