var express = require('express');
var app = express();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');


app.set('view engine', 'pug');
app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});