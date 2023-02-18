import { db } from "../db.js";
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
