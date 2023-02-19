import { uuid } from "uuidv4";
import { db } from "../db.js";

export const addClaim = ( userId, vehicleId, description, numberPlateImage, images, currentStatus, dateTime, location ) => {
    return new Promise((resolve, reject) => {
        const q = "INSERT INTO Claim (claim_id, user_id, vehicle_id, description, number_plate_image, images, status, datetime, location) VALUES (?,?,?,?,?,?,?,?,?);";

        let uuidv4 = uuid();

        db.query(q, [uuidv4, userId, vehicleId, description, numberPlateImage, images, currentStatus, dateTime, location ], (error, result) => {
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
        const q = "SELECT * FROM Claim INNER JOIN User INNER JOIN Vehicle ON Claim.user_id = User.user_id AND Claim.vehicle_id = Vehicle.id where claim_id = ?;"

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
export const getAllClaimDetails = ( customerId, status ) => {
    return new Promise((resolve, reject) => {

        const q1 = `SELECT User.user_id, User.user_name, Claim.claim_id, Claim.datetime, Claim.status FROM User INNER JOIN Claim ON User.user_id = Claim.user_id WHERE User.user_id = ? ${status ? `AND Claim.status = ?` : ''}`;
        const params = status ? [customerId, status] : customerId;
        db.query(q1, params, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
                console.log("query error");
            }
        });
    });
}

export const getAllVehicles = ( customerId ) => {
    return new Promise((resolve, reject) => {

        const q1 = "SELECT * FROM Vehicle WHERE user_id = ?";

        db.query(q1, customerId, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
                console.log("query error");
            }
        });
    });
}