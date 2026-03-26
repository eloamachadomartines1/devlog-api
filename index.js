import express from 'express';
const app = express();


const port = 3030;


app.get('/', (req, res) =>{
    res.json({"mensagem": "Olá, mundo!"});
    console.log(req);
})

app.get('/projects', (req, res) => {
    const {page = 1, limit = 10, status} = req.query;
    //VAlores padrao via desestruturação
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit)

    res.json({
        page: pageNum,
        limit: limitNum,
        status: status || 'todos',
        message: `Página ${pageNum} de projetos com ${limitNum} itens`
    })
})

//Rota com parâmetro dinamico
app.get('/projects/:id',(req, res) =>{
    const {id} = req.params //desestruturação
    res.json({mensagem: `Busncando projeto ${id}`, id})
})


//Rota com múltiplos parametros
app.get('projects/:projectId/logs/:logId', (req, res) =>{
    const{projectId, logId} = req.params;
    res.json({projectId, logId})
})


app.listen(port, () =>{
    let data = new Date();
    console.log(`Servidor iniciado em ${data}`);
})