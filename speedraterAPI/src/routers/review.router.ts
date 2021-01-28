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
]);

// Getting by category
reviewRouter.get('/category/:categoryId', async(req, res) => {
    const categoryId = +req.params.categoryId;
    const reviews = await reviewDao.findByCategoryId(categoryId);
    res.json(reviews);
})

// Saving a review
reviewRouter.post('', async (req, res) => {
    const review = req.body;
    if(!review) {
        res.sendStatus(400);
    }else{
        const id = await reviewDao.save(review);
        if(!id) {
            res.sendStatus(400);
        }else{
            review.id = id;
            res.status(201);
            res.json(review);
        }
    }
});