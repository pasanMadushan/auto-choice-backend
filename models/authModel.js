import { db } from '../db.js';
import bcrypt from "bcrypt";
import { uuid } from 'uuidv4';

export const login = (userName, password) => {
    return new Promise((resolve, reject) => {
        const q = "SELECT * FROM User where user_name = ?";
        db.query(q, userName, (error, result) => {
            
            if (!!error) {
                console.log(error);
                reject(error);
            }
            if (result.length > 0) {
            
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        resolve(result);
                    } else {
                        reject({ message: "The password you entered is incorrect" });
                    }
                });
            } else {
                reject({ message: "User does not exist!" });
            }
        });
    });
}
  

export const register = (agentId, userName, firstName, lastName, NIC, licenseNumber, address, mobileNumber, residenceNumber,image, password, userType ) => {
    return new Promise((resolve, reject) => {

        const saltRounds = 10;
        let hashPassword = bcrypt.hashSync(password, saltRounds);
        const q = "INSERT INTO User (user_id, user_name, first_name, last_name, password, user_type) VALUES (?,?,?,?,?,?);";
        let uuidv4 = uuid();
        db.query(q, [uuidv4, userName, firstName, lastName, hashPassword, userType ], (error, result) => {
            
            if (!error) {
                const q2 = "INSERT INTO Customer (user_id, national_id, license_number, address, mobile_number, residence_number, image) VALUES (?,?,?,?,?,?,?);";
                db.query(q2, [uuidv4, NIC, licenseNumber, address, mobileNumber, residenceNumber,image ],(error,result)=>{
                        if(!error){
                            const q3 = "INSERT INTO Customer_Agent (agent_id, customer_id) VALUES (?,?);";
                            db.query(q3, [agentId, uuidv4], (error, result) => {
                                if (!error) {
                                    resolve(result);
                                } else {
                                    reject(error);
                                    console.log("query error");
                                }
                            })
                            resolve(result);
                        }
                        else{
                            reject(error);
                            console.log("query error");
                        }
                }
                )

                resolve(result);
            } else {
                reject(error);
                console.log("query error");
            }
        });
    });
}