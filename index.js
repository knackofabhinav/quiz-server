const express = require('express');
const cors= require ('cors');
const data = require("./data")
const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Quiz App")
});

console.log(data)
app.get('/quizzes', (req, res) => {
  res.json({success: true, quizzes: data})
} )

app.listen(3000, () => {
  console.log('server started');
});