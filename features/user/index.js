exports.getUser = function (req, res, next) {
    next();
}

exports.getUsers = function (req, res, next) {
    req.users = [
        {
            email: "",
            name: '은수',
        }
    ];
    next();
}
