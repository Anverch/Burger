// Import MySQL connection.
var connection = require("../config/connection.js");

// Select
async function selectAll(){
    const query = `SELECT * FROM burgers`;
    const result = await connection.query(query);
    console.table(result)
    return result
}

// Insert 
async function insertOne(burgerName){
    const query = `INSERT INTO burgers (burger_name) VALUES ("${burgerName}");`;
    const result = await connection.query(query)
    console.table(result)
    return result;
}

// Update
async function updateOne(id){
    const query = `
        UPDATE burgers
        SET devoured = true
        WHERE id = ${id}
    `;
    const result = await connection.query(query)
    console.table(result)
    return result;
}

const orm = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne,
}

module.exports = orm;