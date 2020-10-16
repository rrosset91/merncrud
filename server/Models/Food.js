const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    foodName:{
        type: String,
        required: true,
    },
    
    daysSinceEaten:{
        type: Number,
        required: true,
    },
})

const food = mongoose.model("Food",FoodSchema);
module.exports = food;