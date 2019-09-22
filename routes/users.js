const {Router} = require('express');
const users = require('../features/user');
const auth = require('../core/auth');
const router = Router();

router.get('/', auth.run, users.getUsers, convertToViewModel, (req, res) => {
    res.render('users', req.users);
});

function convertToViewModel(req, res, next) {
    req.users = {
        users: req.users
    };
    next();
}

module.exports = router;

