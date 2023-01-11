const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({email: email});

        if (!user) {
            return res.status(404).json({message: 'user not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({message: 'email or password incorrect'});
        }

        const token = jwt.sign(
            {
              email: user.email,
              userId: user._id.toString()
            },
            'somesupersecretsecret',
            { expiresIn: '1d' }
        );

        res.status(200).json({ token: token, user });
    } catch (err) {
        console.log(err);
    }
};

exports.signup = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            email,
            password: hashedPassword,
            name
        })

        await user.save()

        user.password = undefined;

        res.status(200).json({
            message: 'User created',
            user
        })
    } catch (err) {
        console.log(err);
    }
};