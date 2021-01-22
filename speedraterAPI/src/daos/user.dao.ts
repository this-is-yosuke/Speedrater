import { connectionPool } from '../util/connection'
import { PoolClient } from 'pg'
import User from '../models/user'

// Getting name and pass for Security

export async function findByUserNameAndPassword(username: String, password: String) {
    let client: PoolClient;
    try{
        client = await connectionPool.connect();
        const queryString = `SELECT * FROM users WHERE firstName = $1 AND pass = $2`;
        const result = await client.query(queryString, [username, password]);
        const sqlUser = result.rows[0];
        return sqlUser && convertSqlUser(sqlUser);
    }catch (err) {
        console.log(err);
    }finally {
        client && client.release();
    }
    return undefined;
};

/*
Functions For Finding
*/ 

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


