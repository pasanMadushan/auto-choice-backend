import  express  from "express";

import { loginAction, registerAction } from "../controllers/authController.js"

const router = express.Router();

router.post("/login",loginAction);
router.post("/register",registerAction);

export default router;