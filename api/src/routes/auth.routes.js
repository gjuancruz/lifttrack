const { Router } = require('express');
const router = Router();
const {User} = require('../db');
const bcrypt  = require('bcrypt');


router.post('/register', async(req, res) =>{
    try {
        const {email, password, username} = req.body

        const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS))

        const userAlreadyExists = await User.findOne({
            where: {email: email}
        })

        if ( userAlreadyExists ) {
            return res.status(400).send({ error: 'User already exists' });
        }

        const newUser = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        })
        res.json(newUser)
    } catch (error) {
        console.log(error.message);
        return res.status(404).send (error.message );
    }
})

module.exports = router;
