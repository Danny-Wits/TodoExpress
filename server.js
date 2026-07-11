require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./tasks");
const app = express();
const PORT = 3001;
// const tasks = [];
// let nextIndex = 1;
mongoose.connect(process.env.DB_STRING, {
  dbName: "todo",
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get("/api", async (req, res) => {
  const tasks = await Task.find().sort({ completed: 1, createdAt: -1 });
  res.json({success: true, data: tasks});
});

app.post("/api", async (req, res) => {
  const title = req.body.title;
  const task = {title};
  const createdTask =await Task.create(task);
  res.json({ success: true, data: createdTask });
});

app.patch("/api/:id", async(req, res) => {
  const id = req.params.id;
  const task = await Task.updateOne({ _id: id }, [{ $set: { completed: { $not: "$completed" } } }], { new: true, updatePipeline: true });
  res.json({ success: true, data: task });
})

app.delete('/api/:id', async (req, res) => {
  const id = req.params.id;
  const task = await Task.deleteOne({ _id: id });
  res.json({ success: true, data: task });
})

app.listen(PORT, () => {
  console.log(`servers stated on port ${PORT}`);
});
