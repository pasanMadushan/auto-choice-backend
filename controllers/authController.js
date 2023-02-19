import { login, register } from '../models/authModel.js';
import  Jwt  from 'jsonwebtoken';


export const registerAction = (req,res) =>{

    const agentId = req.user.user_id;
    // const agentId = "bfef95d3-4635-4941-88a2-ae22195a67c2";
    let { userName, firstName, lastName, NIC, licenseNumber, address, mobileNumber, residenceNumber,image, password, userType } = req.body
    register(agentId, userName, firstName, lastName, NIC, licenseNumber, address, mobileNumber, residenceNumber,image, password, userType)
        .then((result)=>{
            res.status(200);
            res.set("Content-Type", "application/json");
            res.json({ success: true, data: result });
        })
        .catch((err) => {
            res.json({
                message: err.message,
            });
            res.status(400);
        });
}

export const loginAction = (req,res) =>{

    let { userName, password } = req.body;
    login(userName,password)
        .then((result)=>{
                const id = result[0].user_id;
                const token = Jwt.sign({ id }, process.env.TOKEN_SECRET, {
                    expiresIn: 3000 * 24, //50 * 24 minutes
                });

                let {password, ...data} = result[0]

                res.status(200);
                res.set("Content-Type", "application/json");
                res.json({ success: true, data: {...data, jwt:token}, message: 'Successfully logged!' });
        }

        )
        .catch((err) => {
            res.json({
                success: false,
                message: err.message,
            });
            res.status(400);
        });

}

export const testingAction = (req,res) =>{
    console.log('customer id ==', req.user.user_id);
    res.json({success: 'dfsfdsfs'});
}