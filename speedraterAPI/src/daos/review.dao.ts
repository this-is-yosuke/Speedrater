import { connectionPool } from '../util/connection'
import { PoolClient} from 'pg'
import { reviewConverter} from '../util/review.converter'
import Review from '../models/review';
// import Review from '../models/review'

// Finding All Reviews, all info
export async function findAll() {
    let client: PoolClient;
    try{
        client = await connectionPool.connect();
        /*
            SELECT * FROM reviews returns the reviews table, but the columns that refer to foreign keys are empty!
            I think we need a JOINS clause here.
         */
        const queryString = `
        SELECT * FROM reviews
        `;
        const result = await client.query(queryString);
        return result.rows.map(reviewConverter);
    }catch (err) {
        console.log(err);        
    }finally{
        client && client.release();
    }
    console.log('found all reviews')
    return undefined
}

// Finding all reviews, only for rating, critique, and reviewer
export async function findRateCritiqueUser() {
    let client: PoolClient;
    try{
        client = await connectionPool.connect();
        /*
            SELECT * FROM reviews returns the reviews table, but the columns that refer to foreign keys are empty!
            I think we need a JOINS clause here.
         */
        const queryString = `
        SELECT rating, critique, user FROM reviews
        `;
        const result = await client.query(queryString);
        return result.rows.map(reviewConverter);
    }catch (err) {
        console.log(err);        
    }finally{
        client && client.release();
    }
    console.log('found all reviews')
    return undefined
}

/* The findAll according to catergory */
export async function findByCategoryId(categoryId: number) {
    let client: PoolClient;
    try{
        client = await connectionPool.connect();
        const queryString = `
        SELECT * FROM reviews
        WHERE categoryid = $1
        `;
        const result = await client.query(queryString, [categoryId]);
        return result.rows.map(reviewConverter);
    }catch (err) {
        console.log(err);        
    }finally{
        client && client.release();
    }
    console.log('found all reviews')
    return undefined
}


export async function findByProduct() {
    let client: PoolClient;
    try{
        client = await connectionPool.connect();
        /*
            SELECT * FROM reviews returns the reviews table, but the columns that refer to foreign keys are empty!
            I think we need a JOINS clause here.
         */
        const queryString = `
        SELECT rating, critique, user FROM reviews
        `;
        const result = await client.query(queryString);
        return result.rows.map(reviewConverter);
    }catch (err) {
        console.log(err);        
    }finally{
        client && client.release();
    }
    console.log('found all reviews')
    return undefined
}

//  POSTing a review

export async function save(review: Review) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `
        INSERT INTO reviews (categoryid, productid, rating, critique, userid, reviewdate)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING reviewid
        `;
        const params = [review.category, review.product, review.rating, review.critique, review.reviewer, review.reviewDate];
        const result = await client.query(queryString, params);
        return result.rows[0].reviewid;
    }catch (err) {
        console.log(err)
    }finally{
        client && client.release();
    }
}