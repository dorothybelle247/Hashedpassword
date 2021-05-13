const monk = require('monk');
const db = monk('/auth-ouzze')

module.exports = db;