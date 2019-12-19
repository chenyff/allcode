let express = require('express');
let app = express();

app.get('/user',(req,res)=>{
    res.json({name:'桔子666'})
})

app.listen(3000)