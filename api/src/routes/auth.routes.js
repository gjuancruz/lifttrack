const { Router } = require('express');
const router = Router();
const {User} = require('../db');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken')


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

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if( !email || !password ) {
            return res.status(400).send({ error: 'Por favor ingresa mail y contraseña válidos' })
        };
        //Second we fidn out if that email exists in our database.
        const user = await User.findOne({
            // @ts-ignore
            where: { email: email }
        });
        
        if( !user ) {
            return res.status(400).send({ error: 'El usuario no existe, intente nuevamente' })
        }
        
        //Comparando Password
        
        const comparePassword = await bcrypt.compare( password, user.password );
        // console.log(comparePassword)
        
        if( !comparePassword ) {
            return res.status(403).json ({ error: 'Contraseña o Usuario Incorrecto'})
        }
        
        //Generando Token
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET || '');

        

        return res.status(200).json({ token: token});
    } catch (error) {
        console.log(error);
        return res.status(400).send('Error al iniciar sesión');
    }
});

module.exports = router;
