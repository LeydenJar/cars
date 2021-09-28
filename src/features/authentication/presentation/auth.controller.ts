//express router here
import express from "express";
import jwt from "jsonwebtoken";

var router = express.Router();


router.post('/register', (req: express.Request, res)=>{
    const {user, pass} = req.body;
    res.send({success: true});
})


router.post('/login', (req, res)=>{
    const {username, password} = req.body;
    const tokenSecret: string = process.env.TOKEN_SECRET as string;
    const token = jwt.sign({username: username}, tokenSecret, { expiresIn: '1h' });

    res.json({success: true, token: token});

    //If no login
    res.status(401).json({success: false, message: 'Login inválido!'});

})

export default router;