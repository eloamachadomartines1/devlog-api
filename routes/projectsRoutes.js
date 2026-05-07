import { Router } from 'express';
import { validateProject } from '../middlewares/validateProject.js';
import { list, create, getById, update, remove } from '../controllers/projectController.js';
const router = Router();

// GET /api/v1/projects
constrouter = Router();

// POST /api/v1/projects
router.get('/', list);

// GET /api/v1/projects/:id
router.post('/', validateProject, create);

// PATCH /api/v1/projects/:id
router.get('/:id', getById);

// DELETE /api/v1/projects/:id
router.patch('/:id', validateProject, update);

router.delete('/:id', remove);

export default router
