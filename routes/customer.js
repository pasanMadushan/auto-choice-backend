import  express  from "express";

import { addClaimAction } from "../controllers/customerController.js"
import { isAuthenticated } from "../middleware/AuthMiddleware.js";
import { hasRole } from "../middleware/RoleManageMiddleware.js";

const router = express.Router();

router.post('/add-claim', isAuthenticated, hasRole(['customer']), addClaimAction);
// router.get('/get-claim-details', isAuthenticated, hasRole(['customer']), addClaimAction);
// router.post('/add-claim', addClaimAction);

export default router;