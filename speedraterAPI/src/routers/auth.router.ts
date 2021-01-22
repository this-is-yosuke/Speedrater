import express from 'express'
import * as UserDao from '../daos/user.dao'

export const authRouter = express.Router();

authRouter.post('/login', async(req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await UserDao.findByUserNameAndPassword(username, password);
    if(user) {
        req.session.user = user;
        res.json(user);
    }else{
        req.session.destroy(() => {});
        res.status(400);
        res.send('Get outta here');
    }
});

authRouter.get('/check-session', (req, res) => {
    res.json(req.session);
})