import express from 'express'
import projectRoutes from './routes/projectsRoutes.js'
const app = express()
app.use(express.json())//Para o express lidra com json
const port = 3030;

app.use('/api/v1/projects', projectRoutes);

app.get('/health', (req, res) =>{
    res.json({satus: "OK"})
})

app.listen(port,() =>{
    console.log(`Servidor iniciado em $`)
})