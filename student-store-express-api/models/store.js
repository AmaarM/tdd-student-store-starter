const express = require("express");
const { storage } = require("../data/storage");
const { BadRequestError } = require("../errors/errors");

let purchaseOrder = {
  id: 0,
  name: "",
  email: "",
  order: [],
  total: 0,
  createdAt: "",
};

class store {
  static listProducts() {
    const products = storage.get("products").value();
    return products;
  }

  static getProduct(productId) {
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value();
    return product;
  }

  static listPurchases() {
    const purchases = storage.get("purchases").value();
    return purchases;
  }

/*   static getPurchases(purchaseId) {
    const purchase = storage
      .get("purchases")
      .find({ id: Number(purchaseId) })
      .value();
    return purchase;
  }
 */
  static makePurchaseOrder(shoppingCart, user) {
    let id = this.listPurchases().length + 1;
    let name = "";
    let email = "";
    let order = [];
    let total = 0;
    let createdAt = new Date().toISOString();

    if (!shoppingCart && !user) {
      throw new BadRequestError();
    }

    if (user.email && user.name) {
      name = user.name;
      email = user.email;
    } else {
      throw new BadRequestError();
    }

    shoppingCart.map((e, idx) => {
      if (e.itemId && e.quantity) {
        
        order.push(e);
      } else {
        throw new BadRequestError();
      }
    });

    console.log(order);

    order.forEach((e) => {
      let product = this.getProduct(e.itemId);
      total = total + product.price * e.quantity;
    });

    total = total * .0875 + total;
  
    purchaseOrder = {
      id: id,
      name: name,
      email: email,
      order: order,
      total: total,
      createdAt: createdAt,
    };

    storage.get("purchases").push(purchaseOrder).write();
    return purchaseOrder;
  }
}

module.exports = store;
