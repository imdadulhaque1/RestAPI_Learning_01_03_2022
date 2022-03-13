const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.send({
        "postMessage":"Here is posted Data!"
    });
})

router.post('/', (req, res, next) =>{
    res.send("Posted data is posted from post method!");
})

router.get('/:id', (req, res, next) =>{
    res.send("individually data get using post id!"); 
})
module.exports = router;