import express from 'express'
import * as CategoryDao from '../daos/category.dao'

export const categoryRouter = express.Router();

categoryRouter.get('', async(req, res) => {
    const categories = await CategoryDao.findAll();
    res.json(categories);
})