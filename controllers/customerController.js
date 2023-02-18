import { addClaim } from "../models/customerModel.js";

export const addClaimAction = (req,res) =>{
    let { vehicleId, description, numberPlateImage, images, currentStatus } = req.body
    const userId = req.user.id;
    // const userId = '9d4f78c9-edd7-4a4a-9e1a-b23d1239a3d1';
    addClaim(userId, vehicleId, description, numberPlateImage, images, currentStatus)
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