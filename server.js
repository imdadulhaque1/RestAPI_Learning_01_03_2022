const express = require('express');
const app = express();

const contactRoute = require('./api/routes/contacts.js');


// ------------> Routing Starting
app.use('/api/contacts', contactRoute)
// ------------> Routing Ended

app.get('/', (req,res) =>{
    res.send("Express Home page!");
})

app.get('/post', (req, res) =>{
    res.send("Posted Here!")
})

app.get('/api/contacts', (req, res) =>{
    res.json(contacts);
})

app.post('/api/contacts', (req, res) =>{
    res.send({
        "message": "Hello, Mr. Imdadul Haque. Have a message for you."
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port @${PORT}.`)
})


const contacts = [
    {name: "Imdadul Haque", email:"imdad@gmail.com"},
    {name: "Israt Jahan Maisha", email:"maisha@gmail.com"},
    {name: "Shampa Khatun", email:"shampa@gmail.com"}
]