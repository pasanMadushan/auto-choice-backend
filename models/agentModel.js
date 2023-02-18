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
