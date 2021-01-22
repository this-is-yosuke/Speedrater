import { connectionPool } from '../util/connection'
import { PoolClient } from 'pg'
import User from '../models/user'

export async function findAll() {
    let client: PoolClient;
    try{
        client = await connectionPool.connect();
        const result = await client.query('SELECT * FROM users');
        return result.rows.map(convertSqlUser);
    }catch (err) {
        console.log(err);
    }finally{
        client && client.release();
    }
}


