import express from 'express'
import morgan from 'morgan'
import projectRoutes from './routes/projectsRoutes.js'

const app = express()

app.use(express.json())//Para o express lidra com json
app.use(morgan('dev'));

app.use('/api/v1/projects', projectRoutes);

const port = 3030;

app.get('/health', (req, res) =>{
    res.json({satus: "OK"})
})

app.listen(port,() =>{
    console.log(`Servidor iniciado em $`)
})