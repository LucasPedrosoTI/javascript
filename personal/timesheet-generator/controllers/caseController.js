let cases = require('../database/db.json');

module.exports = {
    index: (req, res) => {
        res.render('index', { cases, total });
    }
}