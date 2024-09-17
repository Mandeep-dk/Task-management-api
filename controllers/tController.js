const asyncHandler = require("express-async-handler");
const Task = require("../models/tModels");

const addTask = asyncHandler(async(req, res, next)=>{
    const task = new Task({
        task: req.body.task,
        description: req.body.description,
        dueDate: req.body.dueDate
    });
    try{
        await Task.create(task);
    }catch(e){
        res.status(400);
        next(e);
    }
    res.status(201).json(task);
});

const updateTask = asyncHandler(async(req, res, next)=>{
    try{
        let updatedTask = await Task.findOneAndUpdate(
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
        let tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(e){
        res.status(404);
        next(new Error(`Tasks not found.`));
    }
    
});

const getTask = asyncHandler(async(req, res, next)=>{
    try{
        let task = await Task.findById(req.params.id);
        res.status(200).json(task)
    }catch(e){
        res.status(404);
        next(new Error(`Task not found: ${req.params.id}`));
    }
});

const deleteTask = asyncHandler(async(req, res, next)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Task deleted successfully"});
    }catch(e){
        res.status(404);
        next(new Error(`Task not found: ${req.params.id}`));
    }
})

module.exports = {addTask, updateTask, getAllTasks, getTask, deleteTask};