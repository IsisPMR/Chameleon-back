import mysql from 'mysql';
const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "jsChamele30n",
        database: "chameleon",
        multipleStatements:true,
        port:3306
      });
      con.connect((err) => {
        if(err){
            console.log("No hay conexion");
        }else{
            console.log("Conectados");
        }
      });
export default con;