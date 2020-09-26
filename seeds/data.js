
exports.seed = async function(knex) {
  // Deletes ALL existing entries
 

  await knex('recipes').truncate()
  await knex('recipes').insert([
    {step:'boil lamb',weight:3.5},{step:'fry beef',weight:1.0},{step:'cook fish',weight:1.0}
  ])
 
  await knex('ingredients').truncate()
  await knex('ingredients').insert([{name:'lamb'},{name:'beef'},{name:'fish'}])

  await knex('thirdTable').truncate()
  await knex('thirdTable').insert([{
    recipesId:1,ingredientsId:2
  },{
    recipesId:2,ingredientsId:2
  },{
    recipesId:2,ingredientsId:3
  }])
};
