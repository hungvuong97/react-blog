const JwtStrategy = require('passport-jwt').Strategy;
const Extract = require('passport-jwt').ExtractJwt;

const mongoose = require('mongoose');
const key = require('./key');
const User = mongoose.model('user');

const opt = {};
opt.jwtFromRequest = Extract.fromAuthHeaderAsBearerToken("Bearer");
opt.secretOrKey = key.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opt, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
            .then(user => {
                if(user) {
                    return done(null, user)
                }else{
                    return done(null, false);
                }
            }).catch(err => console.log(err))
        })
    )
}