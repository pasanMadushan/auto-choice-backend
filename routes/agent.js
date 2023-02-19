import  express  from "express";

import { registerVehicleAction, validateClaimAction, getAllCustomersAction, getAllClaimDetailsAction } from "../controllers/agentController.js"
import { isAuthenticated } from "../middleware/AuthMiddleware.js";
import { hasRole } from "../middleware/RoleManageMiddleware.js";

const router = express.Router();

router.post('/register-vehicle', isAuthenticated, hasRole(['agent']), registerVehicleAction);
router.post('/validate-claim', isAuthenticated, hasRole(['agent']), validateClaimAction);
router.get('/all-customers', isAuthenticated, hasRole(['agent']), getAllCustomersAction);
router.post('/all-claim-details', isAuthenticated, hasRole(['agent']), getAllClaimDetailsAction);
// router.get('/all-claim-details', getAllClaimDetailsAction);
// router.get('/all-customers', getAllCustomersAction);
// router.post('/validate-claim', validateClaimAction);
// router.post('/register-vehicle', registerVehicleAction);
// router.post('/update-claim-estimation', updateClaimEstimationAction);

export default router;