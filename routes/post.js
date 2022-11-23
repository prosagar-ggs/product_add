const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const Post =  mongoose.model('Post')


router.post("/product",(req,res)=>{
    const {productId,quantity,operation,sku} =req.body

    if (!productId || !quantity || !operation || !sku) {
        return res.status(422).json({ error: "Please add all the fields" })
    }

    Post.findOne({ sku: sku })
        .then(savedPost => {
            if (savedPost) {
                return res.status(422).json({ error: "Product already exists" })
            }
            
            const post = new Post({
                productId,
                quantity,
                operation,
                sku
            })
            post.save()
                .then(post => {
                    res.json({ message: "Product saved successfully" })
                })
                .catch(err => {
                    console.log(err)
                })
        })
}
    
)

module.exports = router;