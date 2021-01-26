import { connectionPool } from '../util/connection'
import { PoolClient } from 'pg'
import { Category } from '../models/category'

export async function findAll() {
    console.log('Finding categories');
    let client: PoolClient;
    try{
        client = await connectionPool.connect();
        const result = await client.query('SELECT * FROM category');
        return result.rows.map(sqlCategory => new Category(sqlCategory.categoryid, sqlCategory.categoryname));
    }catch (err) {
        console.log(err)
    }finally{
        client && client.release();
    }
    console.log('Found categories');
    return undefined
}