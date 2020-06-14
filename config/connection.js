// Set up MySQL connection.
var mysql = require("mysql");
const util = require("util");

var connection = mysql.createConnection({
  host: "t89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gd55vsbjv707jthy",
  password: "z315xmnh93marbeh",
  database: "ec3ytbc458xlabam"
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