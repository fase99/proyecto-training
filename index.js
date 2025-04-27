import express from 'express';


const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) =>{
    res.send('Hello World!')
})

app.listen(port, () =>{
    console.log('server actrive on port 5000')
    console.log('http://localhost:5000')
})