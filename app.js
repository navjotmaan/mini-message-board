const express = require('express');
const path = require('node:path');

const messageRouter = require('./routes/messageRouter');
const indexRouter = require('./routes/indexRouter');
const detailRouter = require('./routes/detailRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));

const public = path.join(__dirname, 'public');
app.use(express.static(public));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', messageRouter);
app.use('/message', detailRouter);

const PORT = process.env.PORT || 5050;

app.listen(PORT, '0.0.0.0', (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server is running on port ${PORT}`);
});
