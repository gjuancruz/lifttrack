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

router.put("/update", async(req, res)=>{
    try {
        const { title, exercises, userId, routineId} = req.body
    const updatedRoutine = await Routine.findByPk(routineId)
    updatedRoutine.title = title
    updatedRoutine.exercises = exercises

    await updatedRoutine.save()

    res.json(updatedRoutine)
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

router.delete("/", async(req,res)=>{
    try {
        const {routineId} = req.body

        await Routine.destroy({
            where:{
                id: routineId,
            }
        })
        return res.status(200).json({ msg: "successfully deleted"});
    } catch (error) {
        console.log(error.message);
        return res.status(404).send(error.message );
    }
})

router.get('/:id', async (req, res) => {
    try {
        const idParams = req.params.id
        console.log('waskeira', idParams)
        const user = await User.findOne({
            where: {id: idParams},
            include: {
                model: Routine
            }
        })
        res.json(user)
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
})

// router.get('/:id', async (req, res) => {
//     try {
//         const idParams = req.params.id
//         console.log('waskeira', idParams)
//         if(idParams){
//         const user = 'aaaaaa' + idParams
//         res.json(user)}
//     } catch (error) {
//         console.log(error);
//         return res.send(error);
//     }
// })
module.exports = router;