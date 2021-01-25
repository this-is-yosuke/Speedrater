import express from 'express'
import * as reviewDao from '../daos/review.dao'
// import { authMiddleware } from '../middleware/auth.middleware'

export const reviewRouter = express.Router();

reviewRouter.get('', [
    // authMiddleware('base', 'admin'),
    async (req, res) => {
        const reviews = await reviewDao.findAll();
        res.json(reviews);
    }
])