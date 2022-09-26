const { Router } = require('express');
const router = Router();
const {User, Routine} = require('../db');

router.get("/", async(req, res)=>{
    try {
        const users = await User.findAll({
            include: {
            model: Routine
        }
     })
        res.json(users)
    } catch (error) {
        console.log(error.message);
        return res.status(404).send (error.message );
    }
})

module.exports = router;
