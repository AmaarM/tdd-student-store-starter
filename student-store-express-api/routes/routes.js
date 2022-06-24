const express = require("express");
const store = require("../models/store")
const error = require("../errors/errors")
const router = express.Router();


router.get("/", async (req,res,next) => {
    const products = await store.listProducts(); 
    res.status(200).json( { products });
})

router.get("/:productId", async(req,res,next) => {
    const productId = req.params.productId;
    const product = await store.getProduct(productId);
    res.status(200).json({ product })
})

router.get(("/store/purchases"), async(req,res,next) => {
    const purchases = await store.listPurchases(); 
    res.status(200).json( { purchases });
})

router.post("/", async (req,res,next) => {
    const shoppingCart = req.body.shoppingCart;
    const user = req.body.user;
    const purchaseOrder = await store.makePurchaseOrder(shoppingCart, user);
    res.status(200).json({"purchase":purchaseOrder});
})

module.exports = router;