import { Router } from 'express';
import {checkAuth, login, logout, registration} from "../controllers/userController.js";
import upload from "../middleware/upload.js";
import {authenticateToken} from "../middleware/authModdleware.js";

const router = new Router();

router.post('/register', upload.single('avatar'), registration);
router.post('/login', login);
router.get('/login', authenticateToken, checkAuth);
router.delete('/logout', logout);
export default router;