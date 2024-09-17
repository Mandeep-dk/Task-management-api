const asyncHandler = require("express-async-handler");
const Tasks = require("../models/tModels");

const addTasks = asyncHandler(async(req, res, next)=>{
    const tasks = new Tasks({
        task: req.body.task,
        description: req.body.description,
        dueDate: req.body.dueDate
    });
    try{
        await Tasks.create(tasks);
    }catch(e){
        res.status(400);
        next(e);
    }
    res.status(201).json(tasks);
});

const updateTasks = asyncHandler(async(req, res, next)=>{
    try{
        let updatedTask = await Tasks.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
          );
        res.status(200).json(updatedTask);
    }catch(e){
        res.status(404);
        next(new Error(`Task not found: ${req.params.id}`));
    }
});

const getAllTasks = asyncHandler(async(req, res, next)=>{
    try{
        let tasks = await Tasks.find();
        res.status(200).json(tasks);
    }catch(e){
        res.status(404);
        next(new Error(`Tasks not found.`));
    }
    
});

const getTasks = asyncHandler(async(req, res, next)=>{
    try{
        let task = await Tasks.findById(req.params.id);
        res.status(200).json(task)
    }catch(e){
        res.status(404);
        next(new Error(`Task not found: ${req.params.id}`));
    }
});

const deleteTasks = asyncHandler(async(req, res, next)=>{
    try{
        await Tasks.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "User deleted successfully"});
    }catch(e){
        res.status(404);
        next(new Error(`Task not found: ${req.params.id}`));
    }
})

module.exports = {addTasks, updateTasks, getAllTasks, getTasks,deleteTasks};