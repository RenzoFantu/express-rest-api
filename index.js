require('dotenv').config();
const express = require ('express')
const mongoose = require ('mongoose')
const routes = require ('./src/routes/index')
const app = express();


const port = process.env.PORT || 3000;

app.use(express.json())

mongoose.connect(process.env.MMONGODB_URI)

app.use('/v1', routes)

// http://localhost:3000

app.get('/', (req, res) =>{
    res.send('todo ok')
})

app.listen(port, () => {
    console.log('servidor iniciado en puerto ' + port);
})
