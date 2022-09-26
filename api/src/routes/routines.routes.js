const { Router } = require('express');
const router = Router();
const { Routine, User } = require('../db');




router.post('/', async (req, res) => {
    try {
        const { title, exercises, userId} = req.body

        const user = await User.findOne({
            where: {id: userId}
        })

        const newRoutine = await Routine.create({
            where:{id: userId},
            title: title,
            exercises: exercises
        })

        await user.addRoutine(newRoutine)
        res.json(newRoutine)
    } catch (error) {
        console.log(error.message);
        return res.status(404).send(error.message );
    }
})

router.get("/", async(req, res)=>{
    try {
        const routines = await Routine.findAll()
        res.json(routines)
    } catch (error) {
        console.log(error.message);
        return res.status(404).send(error.message );
    }
})
module.exports = router;