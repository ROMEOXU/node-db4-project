const db = require('./config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db("recipes")
}

function getShoppingList(shoppingID){
  return db("thirdTable as T")
  .join('recipes as R','R.id','T.recipesId')
  .join('ingredients as I','I.id','T.ingredientsId')
  .where('R.id',shoppingID)
  .select('R.id','I.name','R.weight')
}

function getInstructions(stepID){
    return db('recipes as R')
    .where('R.id',stepID)
    .select('R.id','R.Step')
}