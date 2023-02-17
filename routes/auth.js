import  express  from "express";

import { getUser } from "../controllers/auth.js"

const router = express.Router();

router.get("/user",getUser)

export default router;