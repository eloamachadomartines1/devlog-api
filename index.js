import express from 'express'
import projectRoutes from './routes/projectsRoutes.js'
import morgan from 'morgan'
const app = express()

app.use(express.json())//Para o express lidra com json
const port = 3030;

app.use(morgan('dev'));
app.use('/api/v1/projects', projectRoutes);

app.get('/health', (req, res) =>{
    res.json({satus: "OK"})
})
  
// 404 — rota não encontrada
app.use((req, res, next) => { 
  res.status(404).json({ 
    error: 'Rota não encontrada', 
    path: req.path, 
    method: req.method 
  }); 
});

app.use((err, req, res, next) => { 
  console.error('Erro:', err.message); 
  const status = err.statusCode || 500; 
  res.status(status).json({ 
    error: err.message || 'Erro interno do servidor' 
  }); 
});

app.listen(port,() =>{
    console.log(`Servidor iniciado em $`)
})

