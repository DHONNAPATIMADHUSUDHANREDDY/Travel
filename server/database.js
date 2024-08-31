const { Pool }=require("pg");

const pools=new Pool({
    user:"postgres",
    password:"9398339439",
    host:"localhost",
    port:5432,
    database:"helpdesk"
});

module.exports=pools;