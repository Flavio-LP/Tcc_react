
const express = require('express');
const buscas = require('./buscas')
const vento = require('./vento')

const app = express();

app.use(express.json());

const PORT = 3305;

app.listen(PORT , () => { console.log (`Rodando na porta ${PORT}`)})

app.get('/' , async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const query = await buscas();
    return res.status(201).json(query);
})

app.get('/vento', async(req,res)=> {

    res.header('Access-Control-Allow-Origin', '*');
    const query = await vento();
    return res.status(201).json(query);
})