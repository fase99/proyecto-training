import express from 'express';
import {connectDB} from './db.js';
import User from './models/user.model.js';


const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

connectDB();


app.get('/', (req,res) =>{
    res.send('Hello World!')
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Consulta a la base de datos
        return res.json(users); // Responde con los usuarios encontrados
    } catch (error) {
        console.error('Error fetching users:', error.message); // Log del error
        return res.status(500).json({ error: 'Internal Server Error' }); // Respuesta de error
    }
});

app.post('/users', async (req,res)=>{
    const user = new User(req.body)
    await user.save()
    return res.json(user)
})


app.listen(port, () =>{
    console.log('server actrive on port ' + port)
    console.log(`http://localhost:${port}`)
})