const express = require("express");
const app  = express();
// describe('GET /', () => {
//   it('should respond with Hello World!', async () => {
//     const response = await request(app).get('/');
//     expect(response.statusCode).toBe(200);
//     // expect(response.text).toBe('Hello World!');
//   });
// });

// test("Checking Working Of Test",()=>{
//    expect(true).toBe(true);
// })

console.log("Hello Testing--->")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// --collect-coverage
// Available Routes:

app.get('/',(req,res)=>{
    if(req.url==='/'){

   
//    console.log("---HOME---");
    return res.status(200).send({success:"success"});  
    }
    else{
    return res.status(401).send({error:"error"});  
    
    }
});
app.post('/data',(req,res)=>{
     const{name,address} = req.body;          
       if(name && address){
           return res.status(201).json({
            message:"Success",
             data:req.body 
           })                 
       } 
       else{
        return res.status(401).json({
            message:"Error",             
           }) 
       }  
})


app.listen(5000,()=>{
    // console.log("listening to the portNumber:",5000);
})

module.exports = app;