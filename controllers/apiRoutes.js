const router = require("express").Router();
const { Workout } = require("../models");

router.get(`/`, async (req, res) => {
    try {
        const workouts = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    },
                },
            },
        ])
            .sort({
                day: 1
            })
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json(error);
    }
});



router.get(`/range`, async (req, res) => {
    try {
        const workouts = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    },
                    totalWeight: {
                        $sum: "$exercises.weight"
                    }
                }
            }
        ])
            .sort({
                day: -1
            })
            .limit(7);
        res.status(200).json(workouts);

    } catch (error) {
        res.status(400).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const exerciseToAdd = await Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $push: {
                    exercises: req.body
                },
            },
            { new: true }
        );
        res.status(200).json(exerciseToAdd);
    } catch (error) {
        res.json(error);
    }
});

router.post("/", async ( req, res) => {
    try {
        const workoutToAdd = await Workout.create(req.body);
        res.status(200).json(workoutToAdd);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;