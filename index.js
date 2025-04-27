import express from 'express';


const app = express();

app.get('/', (req,res) =>{
    res.send('Hello World!')
})

app.listen(5000, () =>{
    console.log('server actrive on port 5000')
    console.log('http://localhost:5000')
})