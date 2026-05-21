import { Router } from 'express';
import { validateProject } from '../middlewares/validateProject.js';
import { list, create, getById, update, remove } from '../controllers/projectController.js';
const router = Router();

import { authenticate } from '../middlewares/authenticate.js';

// GET /api/v1/projects
router.get('/', list);

// POST /api/v1/projects
router.post('/', authenticate, validateProject, create);

// GET /api/v1/projects/:id
router.get('/:id', getById);

// PATCH /api/v1/projects/:id
router.patch('/:id', authenticate, validateProject, update);

// DELETE /api/v1/projects/:id
router.delete('/:id', authenticate, remove);

export default router
