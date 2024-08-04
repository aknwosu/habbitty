import { Router } from 'express';
import { getUser, createUser } from '../controllers/userController.js';

const router = Router();

// Route to get a user by ID
router.get('/:id', getUser);

// Route to create a new user
router.post('/', createUser);

// // Route to update an existing user by ID
// router.put('/:id', updateUser);

// Route to delete a user by ID

export default router;
