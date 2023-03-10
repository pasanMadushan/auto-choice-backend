import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export const isAuthenticated = async (req, res, next) => {
    console.log('is authenticated called');
    try {
        if (!req.headers.authorization) {
            res.sendStatus(401);
            return;
        }
        const token = req.headers.authorization;
        let jwtInfo;
        try {
            jwtInfo = jwt.verify(token, process.env.TOKEN_SECRET);
            console.log('jwt info', jwtInfo);
        } catch (error) {
            console.log(error);
            res.sendStatus(401);
            return;
        }
        console.log('is authenticated success');
        next();
    } catch (err) {
        res.status(401).json({
            success: false,
            error: 'unauthorized',
        });
    }
}

