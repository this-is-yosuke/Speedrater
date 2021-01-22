import express from 'express'
import * as userDao from '../daos/user.dao'
import { authMiddleware } from '../middleware/auth.middleware'

export const usersRouter = express.Router();

// HTTP Methods

usersRouter.get('', [
    authMiddleware('admin'),
    async (req, res) => {
        const users = await userDao.findAll();
        res.json(users);
    }
]);

usersRouter.get();

usersRouter.post();