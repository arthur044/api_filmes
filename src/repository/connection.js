import mysql from 'mysql2/promise';

let con = await mysql.createConnection({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER, 
  password: process.env.DB_PASS,  
  database: process.env.DB_NAME,
  typeCast: function (field, next){
    if(fielde.type === 'TINY' && field.length === 1){
      return (field.string() === '1')
    } else if(field.type.includes('DECIMAL')){
      return Number(field.string())
    }
    else {
      return next()
    }
  }
});
console.log('its all ok bro if no, you can tell me');
export default con;