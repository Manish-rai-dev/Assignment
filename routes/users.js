import express from 'express';
import userController from '../controllers/user.controller.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);
router.get("/user", requireAuth, userController.getUser)

export default router;