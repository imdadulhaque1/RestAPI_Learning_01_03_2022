const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts-db');



const contactRoute = require('./api/routes/contacts.js');
const postRoute = require('./api/routes/post.js');
const userRoute = require('./api/routes/userRoute.js');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


// ------------> Routing Starting
app.use('/api/contacts', contactRoute);
app.use('/api/post', postRoute);
app.use('/api/users', userRoute);
// ------------> Routing Ended

// ------------> Starting MongoDB Database connection & check
const db = mongoose.connection;
db.on('error', (err) =>{
    console.log(err);
})
db.once('open', () =>{
    console.log("Database Connection Established!");
})


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