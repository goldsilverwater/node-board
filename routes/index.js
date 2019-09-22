const {Router} = require('express');

const router = Router();

router.get('/', IndexController, (req, res) => {
    res.render('index', req.data);
});

module.exports = router;

function IndexController(req, res, next) {
    const data = {
        title: 'hello world',
    };

    req.data = data;
    next();
}