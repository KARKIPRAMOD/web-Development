const mongoose =require("mongoose");
const { scheduler } = require("timers/promises");

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },

    deadline:{
        type: Date,
        default: Date.now,
    }
});

const Todo = mongoose.model("Todo",taskSchema);

module.exports = Todo