import { uuid } from "uuidv4";
import { db } from "../db.js";

export const addClaim = ( userId, vehicleId, description, numberPlateImage, images, currentStatus ) => {
    return new Promise((resolve, reject) => {
        const q = "INSERT INTO Claim (claim_id, user_id, vehicle_id, description, number_plate_image, images, status) VALUES (?,?,?,?,?,?,?);";

        let uuidv4 = uuid();

        db.query(q, [uuidv4, userId, vehicleId, description, numberPlateImage, images, currentStatus ], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
                console.log("query error");
            }
        });
    });
}