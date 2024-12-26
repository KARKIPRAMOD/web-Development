import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true,
    },

    deadLine:{
        type: Date,
        required:true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps: true}
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;