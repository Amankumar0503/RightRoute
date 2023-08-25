const express=require('express');

const dotenv=require('dotenv')
dotenv.config();

const app=express();

const userRouter=require('./routes/user');
//mongoose
const mongoose=require('mongoose');





mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database is connected');
}).catch(err=> console.log(err.message));



const User=require('./models/user');
//creating an middle-ware function hum koi path add nahi kar rshe hai agr input validate nahi hoga toh vo pure app mein hi andar nahi jayega aisa nhai ki usi particular path ke liye hai
//req-getting request from the front end,res-sending back the request to the front end,next- is a decider function wether our req is correct or not
// app.use((req,res,next)=>{
//     //to listen the request
//     req.on('data',chunk=>{
//         const data=JSON.parse(chunk);// now we get the data from the front end and now we use this data to save inside databse
//         req.body=data;
//         next();//after validation its sending 
//     });
    

// });


 


//middle-ware funtion
app.use(express.json());
app.use(userRouter);
// ./ -we use in path and in endpoints we dont use ./ instead of that we use /



app.get('/',(req,res) =>{
    res.json({success:true,message:'welcome to the backend'});
});

app.listen(8000,()=>{
    console.log('started');
});