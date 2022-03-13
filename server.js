const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

const contactRoute = require('./api/routes/contacts.js');
const postRoute = require('./api/routes/post.js');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


// ------------> Routing Starting
app.use('/api/contacts', contactRoute)
app.use('/api/post', postRoute);
// ------------> Routing Ended

// -----------> use of Middleware
// app.use((req, res, next) =>{
//     console.log("I am a Middleware function!");
//     next();
// })
 
app.get('/', (req,res) =>{
    res.send("Express Home page!");
})

app.get('/post', (req, res) =>{
    res.send("Posted Here!")
})

app.get('/api/contacts', (req, res) =>{
    res.json(contacts);
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