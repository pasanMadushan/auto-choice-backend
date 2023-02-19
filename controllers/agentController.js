import { registerVehicle, validateClaim, getAllCustomers, getAllClaimDetails } from "../models/agentModel.js";
export const registerVehicleAction = (req,res) =>{
    let { model, number, userId, chassisNumber, description, image } = req.body
    registerVehicle(model, number, userId, chassisNumber, description, image)
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


export const validateClaimAction = (req,res) =>{
    let { claimId, comment, approve } = req.body
    validateClaim(claimId, comment, approve)
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

export const getAllCustomersAction = (req,res) =>{
    const agentId = req.user.user_id;
    // const agentId = "bfef95d3-4635-4941-88a2-ae22195a67c5";
    // const agentId = "bfef95d3-4635-4941-88a2-ae22195a67c2";
    getAllCustomers(agentId)
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
    const agentId = req.user.user_id;
    // const agentId = "bfef95d3-4635-4941-88a2-ae22195a67c5";
    // const agentId = "bfef95d3-4635-4941-88a2-ae22195a67c2";

    const { status } = req.body;
    getAllClaimDetails( agentId,status )
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