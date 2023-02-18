import { registerVehicle } from "../models/agentModel.js";
export const registerVehicleAction = (req,res) =>{
    let { model, number, userId, chassisNumber, description, image } = req.body
    // const agentId = req.user.user_id;
    // const agentId = 'f3a3a068-3676-4de9-a8c5-116f9f1e01ae';
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