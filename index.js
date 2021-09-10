const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    res.json({q:"What is the meaning of life the universe and everything?", a:42})
})

app.listen(3000)