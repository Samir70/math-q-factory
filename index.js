const express = require('express');
const cors = require('cors');

const app = express();

const whitelist = [
    'http://localhost:5000', // for local testing
    'https://maths-qs.web.app/', 'https://maths-qs.firebaseapp.com/'
]

const corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            console.log('origin was', origin)
            callback(new Error("Not allowed by cors"))
        }
    }
}

app.use('/', cors(corsOptions), (req, res, next) => {
    res.json({q:"What is the meaning of life the universe and everything?", a:42})
})

app.listen(3000)