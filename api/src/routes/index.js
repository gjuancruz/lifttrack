const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const routinesRoute = require("./routines.routes")
const adminRoute = require("./admin.routes")
const authRoute = require("./auth.routes")


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/routines', routinesRoute)
router.use('/admin', adminRoute)
router.use('/auth', authRoute)


module.exports = router;