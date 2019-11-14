const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const key = require('../../config/key');
const passport = require('passport');
const User = require('../../models/user');

router.post("/register", (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json(user)
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            res.json(user);
                        })
                        .catch(err => console.log(err))
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json('abc');
        }
        bcrypt.compare(password, user.passport, isMatch => {
            if (isMatch) {
                console.log(user.passport)
                const payload = { id: user.id, name: user.name };
                jwt.sign(
                    payload,
                    key.secretOrKey,
                    { expiresIn: 86400 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                )
            }else{
                return res.status(400).json('abc');
            }
        })
    })
})

module.exports = router;