import { login, register } from '../models/authModel.js';
import  Jwt  from 'jsonwebtoken';


export const registerAction = (req,res) =>{

   let { userName, firstName, lastName, NIC, licenseNumber, address, mobileNumber, residenceNumber,image, password, userType } = req.body
    register(userName, firstName, lastName, NIC, licenseNumber, address, mobileNumber, residenceNumber,image, password, userType)
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

    let {userName, password} = req.body;
    login(userName,password)
    .then((result)=>{
        console.log("sdsdsd",result)
        const id = result[0].user_id;
        const token = Jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: 3000 * 24, //50 * 24 minutes  
      });

      let {password, ...data} = result[0]

      res.status(200);
        res.set("Content-Type", "application/json");
        res.json({ success: true, data: {...data, jwt:token} });
    }

    )
    .catch((err) => {
            res.json({
              message: err.message,
            });
            res.status(400);
          });
     
}
