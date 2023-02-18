import dotenv from "dotenv";
import { db } from '../db.js';
import jwt from "jsonwebtoken";
dotenv.config();
export const hasRole = (userTypes) => {
    return async (req, res, next)=> {
        try {
            if (!req.headers.authorization) {
                res.sendStatus(401);
                console.log('Role: No auth', req.path);
                return;
            }
            const token = req.headers.authorization.split('Bearer ')[1];
            const { id } = jwt.verify(token, process.env.TOKEN_SECRET);
            if (!id) {
                res.sendStatus(403);
                console.log('Role: No id', req.path);
                return;
            }
            const q = "SELECT * FROM User where user_id = ?";
            let user = '';
            db.query(q,id, (error, result) => {
                if (!!error) {
                    res.sendStatus(403);
                    console.log('Role: No email', req.path);
                    return;
                }
                user = result[0];
            })
            if (userTypes.includes(user.user_type)) {
                req.user = user;
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