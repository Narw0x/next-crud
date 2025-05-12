import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

type SQLValue = string | number | boolean | null | SQLValue[];
// Generic DB query function
export async function GET<T>(query: string, values: SQLValue[] = []): Promise<T[]> {
    const [rows] = await pool.query(query, values);
    return rows as T[];
}