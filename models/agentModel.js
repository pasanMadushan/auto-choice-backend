import { db } from "../db.js";
import { uuid } from "uuidv4";
export const registerVehicle = ( model, number, userId, chassisNumber, description, image ) => {
    return new Promise((resolve, reject) => {
        const q1 = "INSERT INTO Vehicle (id, model, number, user_id, chassis_number, description, image) VALUES (?,?,?,?,?,?,?);";

        let uuidv4 = uuid();

        db.query(q1, [ uuidv4, model, number, userId, chassisNumber, description, image ], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
                console.log("query error");
            }
        });
    });
}

export const validateClaim = ( claimId, comment, approve ) => {
    return new Promise((resolve, reject) => {

        const q1 = "UPDATE Claim SET status = ?, comment = ? WHERE claim_id = ?";

        db.query(q1, [ approve, comment, claimId ], (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
                console.log("query error");
            }
        });
    });
}
export const getAllCustomers = ( agentId ) => {
    return new Promise((resolve, reject) => {

        const q1 = "SELECT Customer_Agent.agent_id, Customer_Agent.customer_id, User.user_name FROM Customer_Agent INNER JOIN User ON Customer_Agent.customer_id = User.user_id WHERE Customer_Agent.agent_id = ?";

        db.query(q1, agentId, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
                console.log("query error");
            }
        });
    });
}

export const getAllClaimDetails = ( agentId, status ) => {
    return new Promise((resolve, reject) => {
        const q1 = `SELECT Customer_Agent.agent_id, Customer_Agent.customer_id, User.first_name, User.last_name, Claim.claim_id, Claim.datetime, Claim.status FROM Customer_Agent INNER JOIN User INNER JOIN Claim ON Customer_Agent.customer_id = User.user_id AND Customer_Agent.customer_id = Claim.user_id WHERE Customer_Agent.agent_id = ? ${status ? `AND Claim.status = ?` : ''}`;
        const params = status ? [agentId, status] : agentId;
        console.log("sdsdsd", agentId)
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