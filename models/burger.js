var orm = require("../config/orm");

var burger = {
    all: async ()=> {
      return await orm.selectAll()
    },
    create: async (burgerName)=> {
      return await orm.insertOne(burgerName)
    },
    update: async (burgerId)=> {
      return await orm.insertOne(burgerId)
    },
  };

module.exports = burger;