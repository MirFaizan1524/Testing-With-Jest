const request = require('supertest'); // For making HTTP requests in tests
const app = require('../app'); // Import the app
// const { json } = require('express');
// const createError = require('../error.js');

 describe("Testing  Api's",()=>{
       // Case1:
     test("Post Api returns Success OR False",async()=>{ 
     let response =await request(app).post('/data').send({name:"faiz",address:"malbagh"}).
      set('Accept', 'application/json'); 
         // console.log(response.text);     
       let jsonResponse =  await JSON.parse(response.text); 
          console.log(jsonResponse.message); 
          expect("Success").toContain(jsonResponse.message);                             
      })  

      //Case2:
     test("Get Api Returns Success Or Error",async()=>{
            let getResponse  = await request(app).get("/");
                let jsonGet =    await JSON.parse(getResponse.text)  
               expect("success").toContain(jsonGet.success);                  
     })   
             
 })  




// const getSum = require("../__tests__/sum.js");

// testing for numbers/strings:

// test("Checking Numbers,strings",()=>{

//    expect("Hello World").toBe("Hello World"); 

// })

       
 //testing for objects:                
// test("Testing objects",()=>{
//      let data = {
//        age:25  
//      }
//      data['name'] = "faiz";     
               
//    expect(data).toEqual({age:25,name:"faiz"});

// });

// To Be Falsy

// test("Check For toBeFalsy",()=>{
//     let n =0; 
//     expect(n).toBeFalsy();           
// })


// test("Checking To be Truthy",()=>{
//    let n =1;
//    expect(n).toBeTruthy(); 
   
// })


   // test("checking To Throw Error",()=>{
   //      expect(()=>{
   //         createError("1234");    
   //      }).toThrow(); 

   // });



