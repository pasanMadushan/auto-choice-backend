import { updateClaimEstimation } from "../models/garageModel.js";
export const updateClaimEstimationAction = (req,res) =>{
    let { claimId, estimateValue, estimateImage } = req.body
    const garageId = req.user.user_id;
    // const garageId = 'cf6f2c84-3328-493d-9dbc-0492222919e6';
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