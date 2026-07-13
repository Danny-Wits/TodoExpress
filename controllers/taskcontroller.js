const Task = require('../models/task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json({success: true, data: tasks});
};

exports.createTask = async (req, res) => {
  const title = req.body.title;
  const task = await Task.create({ title });
  res.json({ success: true, data: task });
};

exports.updateTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  if(!task) {
    return res.json({ success: false, message: "Task not found" });
  }
  await Task.updateOne({_id: id}, { $set: { completed: !task.completed } });
  res.json({ success: true, data: task });
};

exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.deleteOne({ _id: id });
  res.json({ success: true, data: task });
};
