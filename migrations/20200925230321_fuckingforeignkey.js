
exports.up = async function(knex) {
  await knex.schema.createTable("recipes",tbl=>{
      tbl.increments()
      tbl.text('Step')
      tbl.float('weight')
  });

  await knex.schema.createTable("ingredients",tbl=>{
      tbl.increments()
      tbl.text('name')
     
  })
};

await knex.schema.createTable('thirdTable',tbl=>{
  tbl.integer('recipesId').references('id').inTable('recipes').onUpdate("CASCADE")
  .onDelete("CASCADE");
  tbl.integer('ingredientsId').references('id').inTable('ingredients').onUpdate("CASCADE")
  .onDelete("CASCADE");
})

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("thirdTable")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
