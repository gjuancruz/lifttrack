const { Router } = require('express');
const router = Router();
const {Routine} = require('../db');

router.get('/', async (req, res)=>{
try {
    res.status(200).send('hola')
} catch (error) {
    
}
})

module.exports = router;