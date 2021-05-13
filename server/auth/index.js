const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const db = require('../db/connection')
const users = db.get('users')

users.createIndex('username', {unique: true})

const router = express.Router();


const schema = Joi.object().keys({
    username: Joi.string()
        .alphanum()
        .min(6)
        .max(30)
        .required(),

        password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .trim()
        .required(),
})

router.get('/',(req, res) =>  {
    res.json({
        message: 'uni '
    })
})

router.post('/signup', (req, res) => {
    const result = Joi.validate(req.body, schema)
    if (result.error === null) {
        users.findOne({
            username: req.body.username
        }).then(user => {
            res.json({user})
            if(user){
                // const err = new Error(`User ${req.body.username})
                const err = new Error("username already exist")
                next(error)
            }else{
                // 
                bcrypt.hash(req.body.password.trim(), 12).then(hashedPassword => {
                    // res.json({hashedPassword})
                    const newUser = {
                        username: req.body.username,
                        password: hashedPassword
                    }

                    users.insert(newUser).then(insertedUser => {
                        // res.json({insertedUser})
                        delete insertedUser.password;
                        res.json({
                            _id: insetedUser._id,
                            username: insetedUser.username
                        })
                    })
                })
            }
        })
    }else{
        next(result.error)
    }
})

module.exports = router;