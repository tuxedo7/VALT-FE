import { createPool, Pool } from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

interface DbConfig {  
  host: string;  
  port: number;  
  user: string;  
  password: string;  
  database: string;  
}  

// Create and validate the database configuration  
const config: DbConfig = {  
  host: process.env.MYSQL_HOST || "localhost", // Set defaults as needed  
  port: parseInt(process.env.MYSQL_PORT || "3306", 10),  
  user: process.env.MYSQL_USER || "root",  
  password: process.env.MYSQL_PASSWORD || "",  
  database: process.env.MYSQL_DATABASE || "mydatabase",  
};  

// Create the pool connection  
export const pool: Pool = createPool(config);