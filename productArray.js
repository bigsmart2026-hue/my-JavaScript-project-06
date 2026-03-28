function storeProducts() {

    let products = [
        { name: "Rice", price: 3000, quantity: 50 },
        { name: "Beans", price: 1800, quantity: 30 },
        { name: "Oil", price: 2500, quantity: 20 }
    ];

    for (let i = 0; i < products.length; i++) {
        console.log("Product:", products[i].name, "- Price: ₦" + products[i].price);
    }

    let totalValue = 0;

    for (let i = 0; i < products.length; i++) {
        totalValue += products[i].price * products[i].quantity;
    }

    console.log("Total store value: ₦" + totalValue);
}

storeProducts();