import { Pool } from 'pg'

const connectionConfig = {
    user: process.env.Speedrater_DB_USERNAME,
    host: process.env.Speedrater_DB_URL,
    database: process.env.Speedrater_DB_NAME,
    password: process.env.Speedrater_DB_PASSWORD,
    port: +process.env.Speedrater_DB_PORT
};

export const connectionPool = new Pool(connectionConfig);