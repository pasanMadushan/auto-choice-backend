import  express  from "express";

import { addClaimAction, getClaimDetailsAction, updateClaimEstimationAction } from "../controllers/customerController.js"
import { isAuthenticated } from "../middleware/AuthMiddleware.js";
import { hasRole } from "../middleware/RoleManageMiddleware.js";

const router = express.Router();

router.post('/add-claim', isAuthenticated, hasRole(['customer']), addClaimAction);
router.get('/get-claim-details', isAuthenticated, hasRole(['customer', 'garage']), getClaimDetailsAction);
router.post('/update-claim-estimation', isAuthenticated, hasRole(['garage']), updateClaimEstimationAction);
// router.post('/update-claim-estimation', updateClaimEstimationAction);
// router.get('/get-claim-details', getClaimDetailsAction);
// router.post('/add-claim', addClaimAction);

export default router;