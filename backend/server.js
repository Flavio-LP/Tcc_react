
const express = require('express');
const buscas = require('./buscas')
const vento = require('./vento')
let data;
const app = express();

app.use(express.json());

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

const PORT = 3305;

app.listen(PORT , () => { console.log (`Rodando na porta ${PORT}`)})

app.get('/' , async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const query = await buscas(data);
    return res.status(201).json(query);
})

app.get('/vento', async(req,res)=> {

    res.header('Access-Control-Allow-Origin', '*');
    const query = await vento(data);
    return res.status(201).json(query);
})

app.post("/data", (req, res) => {
    data = req.body.Data_calendario
    return res.status(201).json(req.body);
    
  });