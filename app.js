var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Test');
});

app.listen(port,()=>{
    console.log(`Port no : ${port}`)
})