import  express  from "express";

import { addClaimAction, getClaimDetailsAction, getAllClaimDetailsAction, getAllVehiclesAction } from "../controllers/customerController.js"
import { isAuthenticated } from "../middleware/AuthMiddleware.js";
import { hasRole } from "../middleware/RoleManageMiddleware.js";

const router = express.Router();

router.post('/add-claim', isAuthenticated, hasRole(['customer']), addClaimAction);
// router.post('/add-claim', addClaimAction);
router.post('/get-claim-details', isAuthenticated, hasRole(['customer', 'garage', 'agent']), getClaimDetailsAction);
// router.get('/get-all-claim-details', isAuthenticated, hasRole(['customer']), getAllClaimDetailsAction);
router.get('/get-all-vehicles', isAuthenticated, hasRole(['customer']), getAllVehiclesAction);
// router.get('/get-all-vehicles', getAllVehiclesAction);
router.get('/get-all-claim-details', getAllClaimDetailsAction);
// router.post('/update-claim-estimation', updateClaimEstimationAction);
// router.get('/get-claim-details', getClaimDetailsAction);
// router.post('/add-claim', addClaimAction);

export default router;