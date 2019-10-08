var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "f8qj4n85l373gfa4",
    password: "g67beoym3iuwfi7e",
    database: "xvsyw0uk90pbb0lu"
});
};

connection.connect();
module.exports = connection;



