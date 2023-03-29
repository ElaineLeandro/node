const { default: knex } = require("knex");

exports.up = knex => knex.schema.createTable("notes", table =>{

  table.increments('id')
  table.text("title")
  table.text("description")
  table.inte

})

exports.down = knex => knex.schema.dropTable("notes")
