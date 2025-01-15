import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

const configDatabase: pg.PoolConfig = {
    connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === "production") {
    configDatabase.ssl = {
        rejectUnauthorized: false,
    };
}
const db = new Pool(configDatabase);

export default db;