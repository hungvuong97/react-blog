const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require('passport')
const app = express();
const cors = require('cors')
const port = process.env.PORt || 5000;
const user = require("./routes/api/user")
const picture = require('./routes/get/picture')
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const db = require('./config/key').mongoURI;
mongoose.connect(db)
    .then(() => console.log('Mongo Connected'))
    .catch(err => console.log(err));
app.use(passport.initialize());

require("./config/passport")(passport);
require('./models/article')
app.use('/api/user', user);
app.use('/api/get', picture);
app.listen(port, () => {
    console.log('server running on port 5000')
})