const express = require("express");
const app = express();
const PORT = 3000;
const tasks = [];
let nextIndex = 1;
app.use(express.json());

app.get('/frontend', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.get("/", (req, res) => {
  res.json({success: true, data: tasks});
});

app.post("/", (req, res) => {
  const title = req.body.title;
  const task = { id: nextIndex++, title, completed: false };
  tasks.push(task);
  console.log(tasks);
  res.json({ success: true, data: task });
});

app.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(e => e.id === id);

  if(!task) {
    return res.json({ success: false, message: "Task not found" });
  }
  task.completed = !task.completed;
  res.json({ success: true, data: task });
})

app.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex(e => e.id === id);
  if(index === -1) {
    return res.json({ success: false, message: "Task not found" });
  }
  const task = tasks.splice(index, 1);
  res.json({ success: true, data: task });
} )

app.listen(PORT, () => {
  console.log(`servers stated on port ${PORT}`);
});
