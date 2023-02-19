import dotenv from "dotenv";
import { db } from '../db.js';
import jwt from "jsonwebtoken";
dotenv.config();
export const hasRole = (userTypes) => {
    return async (req, res, next)=> {
        console.log('is role mangement called');
        try {
            if (!req.headers.authorization) {
                res.sendStatus(401);
                console.log('Role: No auth', req.path);
                return;
            }
            const token = req.headers.authorization;
            const { id } = jwt.verify(token, process.env.TOKEN_SECRET);
            if (!id) {
                res.sendStatus(403);
                console.log('Role: No id', req.path);
                return;
            }
            const q = "SELECT * FROM User where user_id = ?";
            let user = '';
            let results = await new Promise((resolve, reject) => {
                db.query(q,id, (error, result) => {
                    if (error) {
                        res.sendStatus(403);
                        console.log('Role: No email', req.path);
                        reject(error)
                        return;
                    } else {
                        resolve(result);
                    }
                })
            })
            user = results[0];

            if (userTypes.includes(user.user_type)) {
                req.user = user;
                console.log('role management success');
                next();
            } else {
                res.sendStatus(403);
                console.log('Role: wrong user role', req.path, user_type);
            }
        } catch (error) {
            res.sendStatus(401);
        }
    };
};