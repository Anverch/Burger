// Import MySQL connection.
var connection = require("../config/connection.js");

// Select
function selectAll(){
    const query = `SELECT * FROM burgers`;
    connection.query(query, function(err, result) {
        if (err) {
          throw err;
        }
        return result;
      });
}

// Insert 
function insertOne(burgerName){
    const query = `INSERT INTO burgers (burger_name) VALUES ("${burgerName}");`;
    connection.query(query, function(err, result) {
        if (err) {
          throw err;
        }
        return result;
      });
}

// Update
function updateOne(id){
    const query = `
        UPDATE burgers
        SET devoured = true
        WHERE id = ${id}
    `;
    connection.query(query, function(err, result) {
        if (err) {
          throw err;
        }
        return result;
      });
}

const orm = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne,
}

module.exports = orm;