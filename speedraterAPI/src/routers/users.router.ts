import express from 'express'
import * as userDao from '../daos/user.dao'
// import { authMiddleware } from '../middleware/auth.middleware'

export const usersRouter = express.Router();

// HTTP Methods

usersRouter.get('', [
    // authMiddleware('admin'),
    async (req, res) => {
        const users = await userDao.findAll();
        res.json(users);
    }
]);

usersRouter.post('', async(req, res) => {
    const user = req.body;
    if(!user) {
        res.sendStatus(400);
    }else{
        const id = await userDao.save(user);
        if(!id) {
            res.sendStatus(400);
        }else{
            user.id = id;
            res.status(201);
            res.json(user);
        }
    }
});

// usersRouter.post();