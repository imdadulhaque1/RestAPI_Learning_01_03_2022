const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send("Express Home page!");
})
get.get('/api/students',(req,res) =>{
    res.send("Get Data!");
})

get.post('/api/students',(req,res) =>{
    res.send("Data Posted!");
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port @${PORT}.`)
})