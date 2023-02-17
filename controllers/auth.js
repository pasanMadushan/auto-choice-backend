import { db } from '../db.js';

export const getUser = (req,res) =>{
    let q = 'SELECT * from User';
    
    db.query(q, (err,data)=>{
        if (err) return res.status(500);

        return res.status(200).json(data)
    });
}