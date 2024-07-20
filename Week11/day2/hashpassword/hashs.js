// creat a module file hsash.js
// a function hashMyPassword that get a password as parameter 1q2w3e4
// and returnn a hash password / module.export / export
// use bcrypt from NPM
// dispatchEvent.js use the hash.js

const bcrypt = require("bcrypt")

const hash = async (pass) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(10);
    console.log(salt);
    // pass = new String(pass)
    const hash = bcrypt.hashSync(pass + "", salt);
    return hash
}
console.log(hash(123456))


module.exports = {
    hash,
}