const  express = require("express");
const path = require('path');
const adminRoutes = require('./src/routes/admin');
const shopRoutes = require('./src/routes/shop');

const app = express();

app.use('/admin', adminRoutes);

app.use(("/add-product"),(req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Add Product</h1>');
});

app.use(shopRoutes);

app.use(('*'), (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'src', 'views', 'not_found.html'));
});

app.listen(1337);