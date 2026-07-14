const dotenv = require('dotenv')
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require('./routes/taskroutes');

mongoose.connect(process.env.DB_STRING,{dbName:'todo'}).then(() => {
  console.log("Connected to MongoDB")
}).catch(err=>console.error(err));

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
