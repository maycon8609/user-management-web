import { Pool, QueryResult } from "pg"

const pool = new Pool({
  user: "myuser",
  host: "postgres",
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432
})

interface QueryResultWithRowsAffected extends QueryResult {
  rowCount: number | null;
}

export async function query(queryText: string, params?: any[]): Promise<QueryResultWithRowsAffected> {
  const client = await pool.connect()

  try {
    return await client.query(queryText, params)
  } finally {
    client.release()
  }
}
