
const express = require('express');
const buscas = require('./buscas')

const app = express();

app.use(express.json());

const PORT = 3305;

app.listen(PORT , () => { console.log (`Rodando na porta ${PORT}`)})

app.get('/' , async (req, res)=>{
    
    const query = await buscas();
    return res.status(201).json(query);
})