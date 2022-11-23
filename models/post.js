const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    productId:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    operation:{
        type:String,
        required:true
    },
    sku:{
        type:Number,
        required:true
    }

})

mongoose.model("Post",postSchema);