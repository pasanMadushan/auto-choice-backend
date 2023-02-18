import  express  from "express";

import { updateClaimEstimationAction } from "../controllers/garageController.js"
import { isAuthenticated } from "../middleware/AuthMiddleware.js";
import { hasRole } from "../middleware/RoleManageMiddleware.js";

const router = express.Router();

router.post('/update-claim-estimation', isAuthenticated, hasRole(['garage']), updateClaimEstimationAction);
// router.post('/update-claim-estimation', updateClaimEstimationAction);

export default router;