const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: "Enter a date",
    },
    exercises:
    [
        {
            type: {
                type: String,
                required: "type property required",
            },
            name: {
                type: String,
                required: "name property required"
            },
            duration: {
                type: Number,
                required: "duration property required"
            },
            distance: Number,
            reps: Number,
            sets: Number,
            weight: Number,
        },
    ],
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;