const express = require('express');
const mongoose = require('mongoose');
const server = express();
const FoodModel = require('./Models/Food');
require('dotenv').config();

server.use(express.json());
const mongoKey = process.env.MONGO_KEY;
mongoose.connect(`mongodb+srv://standarduser:${mongoKey}@crud.jnvda.mongodb.net/food?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
})

server.get('/', async(req,res)=>{
    const food = FoodModel({
        foodName: "batata",
        daysSinceEaten: 1,
    })

    try {
        await food.save();
        res.send('Data inserted successfully');
        
    } catch (error) {
        console.log(error.message);
    }
})

server.listen(3000, ()=>{
    console.log(`Server running on port 3001...`);
})