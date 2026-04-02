import express from 'express';
const app = express();
app.use(express.json()); //para o express lidar com json

const port = 3030;

//"Banco" em memória - array de projetos
let projects =[];

//GET /api/v1/projects - listar todos
app.get('/api/v1/projects', (req, res) =>{
    res.json({
        projects,
        total:projects.length})
});

//Post /api/v1/projects - criar novo projeto 
app.post('/api/v1/projects', (req, res) => {
    const {title, description} = req.body;
    if(!title){
        return res.status(400).json({ error: "o campo title é obrigatorio"})
    } 
    const projects = {
        id: Date.now().toString(),
        title, title,
        description: description || '',
        createAd: new Date().toISOString()
    }
    projects.push(project)
    res.status(201).json(projetc)
})

//GET /api/v1/projects/:id - atualizar
app.patch('/api/v1//projects/:id',(req, res) => {
    const projects
})
 