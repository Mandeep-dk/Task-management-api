const mongoose = require("mongoose");

const taskSchema=mongoose.Schema({
    task:{
        type: String,
        required: [true, "Please add a task."],
    },
    description:{
        type: String,
        required: [true, "Please add a description"],
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
    dueDate:{
        type: Date,
        required: [true, "Please add a dueDate"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Tasks", taskSchema);