import { Pool } from 'pg'

const connectionConfig = {
    user: process.env.SPEEDRATER_DB_USERNAME,
    host: process.env.SPEEDRATER_DB_URL,
    database: process.env.SPEEDRATER_DB_NAME,
    password: process.env.SPEEDRATER_DB_PASSWORD,
    port: +process.env.SPEEDRATER_DB_PORT,
    max: 5
};

export const connectionPool = new Pool(connectionConfig);

// 8050 is not a free port; apparently it's for Transmission Control Protocol
// 8000 is for internet radio streaming

/* Furthermore, if you run the app on an occupied port, you'll run 
into the error: Connection Terminated Unexpectedly */

/* I am an idiot. The port here is for PG's port, which is set to 
5432. The port in index.ts is for the API. */