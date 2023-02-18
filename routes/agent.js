import  express  from "express";

import { registerVehicleAction } from "../controllers/agentController.js"
import { isAuthenticated } from "../middleware/AuthMiddleware.js";
import { hasRole } from "../middleware/RoleManageMiddleware.js";

const router = express.Router();

router.post('/register-vehicle', isAuthenticated, hasRole(['agent']), registerVehicleAction);
// router.post('/register-vehicle', registerVehicleAction);
// router.post('/update-claim-estimation', updateClaimEstimationAction);

export default router;