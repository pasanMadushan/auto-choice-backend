import { addClaim, getClaimDetails, getAllClaimDetails, getAllVehicles } from "../models/customerModel.js";

export const addClaimAction = (req,res) =>{
    let { vehicleId, description, numberPlateImage, images, currentStatus, dateTime, location } = req.body
    const userId = req.user.user_id;
    // const userId = '14b81f3a-2cc2-40be-a7a1-6522bcfe165b';
    addClaim(userId, vehicleId, description, numberPlateImage, images, currentStatus, dateTime, location)
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
export const getClaimDetailsAction = (req,res) =>{
    let { claimId } = req.body
    getClaimDetails(claimId)
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
export const getAllClaimDetailsAction = (req,res) =>{
    const customerId = req.user.user_id;
    // const customerId = "14b81f3a-2cc2-40be-a7a1-6522bcfe165b";
    // const customerId = "65007509-5199-44a1-aaee-541953825bf8";

    const { status } = req.body;
    getAllClaimDetails( customerId,status )
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

export const getAllVehiclesAction = (req,res) =>{
    const customerId = req.user.user_id;
    // const customerId = "14b81f3a-2cc2-40be-a7a1-6522bcfe165b";
    // const customerId = "65007509-5199-44a1-aaee-541953825bf8";

    getAllVehicles( customerId )
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