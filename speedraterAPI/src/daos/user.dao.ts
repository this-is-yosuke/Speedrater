import { connectionPool } from '../util/connection'
import { PoolClient } from 'pg'
import { convertSqlUser } from '../util/user.converter'
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
    console.log('finding all users');
    let client: PoolClient;
    try{
        client = await connectionPool.connect();
        const result = await client.query('SELECT * FROM users');
        return result.rows.map(convertSqlUser);
    }catch (err) {
        console.log('there was an error')
        console.log(err);
    }finally{
        client && client.release();
    }
    return undefined;
}

// Saving

export async function save(user: User) {
    let client : PoolClient;
    try{
        client = await connectionPool.connect();
        const queryString = `
            INSERT INTO users (firstname, lastname, email, pass, roles)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING userid
        `;
        // The params need to match your Model.ts file
        const params = [user.firstName, user.lastName, user.email, user.password, user.roles];
        const result = await client.query(queryString, params);
        return result.rows[0].userid;
    }catch (err) {
        console.log(err)
    }finally {
        client && client.release();
    }
}