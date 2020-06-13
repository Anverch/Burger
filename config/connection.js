// Set up MySQL connection.
var mysql = require("mysql");
const util = require("util");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

const query = util.promisify(connection.query).bind(connection);
// Export connection for our ORM to use.
module.exports = {
  query: query,
  connection: connection,
}