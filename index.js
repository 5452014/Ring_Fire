const express=require('express')
const app=express()


app.get("/",function(req,res){
    res.sendfile(__dirname+"ring.html")
})

app.listen(5000,function(){
    console.log('Server running on port 5000');

})
