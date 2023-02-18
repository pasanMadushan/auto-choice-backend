import { updateClaimEstimation } from "../models/garageModel.js";
export const updateClaimEstimationAction = (req,res) =>{
    let { claimId, estimateValue, estimateImage } = req.body
    const garageId = req.user.user_id;
    // const garageId = 'f3a3a068-3676-4de9-a8c5-116f9f1e01ae';
    updateClaimEstimation(claimId, estimateValue, estimateImage, garageId)
        .then((result)=>{
            res.status(200);
            res.set("Content-Type", "application/json");
            res.json({ success: true, data: result });
        })
        .catch((err) => {
            res.json({
                message: err.message,
            });
            res.status(400);
        });
}