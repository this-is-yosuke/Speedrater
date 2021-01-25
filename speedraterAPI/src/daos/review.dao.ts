import { connectionPool } from '../util/connection'
import { PoolClient} from 'pg'
import { reviewConverter} from '../util/review.converter'
// import Review from '../models/review'

export async function findAll() {
    let client: PoolClient;
    try{
        client = await connectionPool.connect();
        /*
            SELECT * FROM reviews returns the reviews table, but the columns that refer to foreign keys are empty!
            I think we need a JOINS clause here.
         */
        const queryString = `
        SELECT critique FROM reviews
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