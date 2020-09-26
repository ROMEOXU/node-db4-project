const express = require('express');
const server = express();
server.use(express.json());
const PORT = process.env.PORT || 4400;
const Data = require('./help-knex');

server.use((err,req,res,next)=>{
    res.status(500).json({
        message:"sth wrong,try later"
    })
});

server.get('/recipes',async(req,res,next)=>{
try{
    const recipe = await Data.getRecipes()
    res.json(recipe)
}catch(err){
    next(err)
}
})

server.get('/recipes/:id/shoppingList',async (req,res,next)=>{
    try{
        const list = await Data.getShoppingList(req.params.id)
        res.json(list)
    }catch(err){
    next(err)
    }
})

server.get('/recipes/:id',async (req,res,next)=>{
    try{
        const step = await Data.getInstructions(req.params.id)
        res.json(step)
    }catch(err){
    next(err)
    }
})
server.listen(PORT,()=>{
    console.log(`db4 project is listening on ${PORT} `)
})