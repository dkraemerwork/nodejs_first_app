const  express = require("express");

const app = express();

app.use(("/add-product"),(req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Add Product</h1>');
});

app.use(("/"),(req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>hello From express</h1>');
});

app.listen(1337);
