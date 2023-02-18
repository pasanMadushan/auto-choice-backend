import  express  from "express";

import { loginAction, registerAction, testingAction } from "../controllers/authController.js"
import {isAuthenticated} from "../middleware/AuthMiddleware.js";
import {hasRole} from "../middleware/RoleManageMiddleware.js";

const router = express.Router();

router.post("/login", loginAction);
router.post("/register",registerAction);
router.post('/test', isAuthenticated, hasRole(['customer']), testingAction);

export default router;