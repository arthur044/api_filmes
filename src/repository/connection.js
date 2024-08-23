import mysql from 'mysql2/promise';

let con = await mysql.createConnection({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER, 
  password: process.env.DB_PASS,  
  database: process.env.DB_NAME,
});
console.log('its all ok bro if no, you can tell me');
export default con;