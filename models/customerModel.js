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
export const getClaimDetails = ( claimId ) => {
    return new Promise((resolve, reject) => {
        const q = "SELECT * FROM Claim where claim_id = ?;"

        db.query(q, claimId, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
                console.log("query error");
            }
        });
    });
}

export const updateClaimEstimation = ( claimId, estimateValue, estimateImage, garageId ) => {
    return new Promise((resolve, reject) => {
        const q1 = "INSERT INTO Estimation (claim_id, estimate_value, estimate_image, garage_id) VALUES (?,?,?,?);";
        const q2 = "UPDATE Claim SET status = ? WHERE claim_id = ?";
        db.query(q1, [ claimId, estimateValue, estimateImage, garageId ], (error, result) => {
            if (!error) {
                db.query(q2, ['active', claimId], (error, result) => {
                    if(!error){
                        resolve(result);
                    }
                    else{
                        reject(error);
                        console.log("query error");
                    }
                })
                resolve(result);
            } else {
                reject(error);
                console.log("query error");
            }
        });
    });
}
