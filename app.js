const express = require('express');
const path = require('node:path');

const messageRouter = require('./routes/messageRouter');
const indexRouter = require('./routes/indexRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', messageRouter);

app.listen(5050, (error) => {
    if (error) {
        throw error;
    }
    console.log('listening to port 5050: ');
});