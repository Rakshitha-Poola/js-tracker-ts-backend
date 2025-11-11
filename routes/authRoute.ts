import express, { Router } from 'express'
import { google, login, register } from '../controllers/authController.js';


const router:Router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.post('/google', google)


export default router