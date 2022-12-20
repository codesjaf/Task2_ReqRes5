const express = require('express');
const app = express();


const products=[
    {id:1,name:"necklace",price:89.59,amount:23},
    {id:2,name:"Iphone12",price:1400,amount:100},
    {id:3,name:"skirt",price:49.99,amount:70},
    {id:4,name:"T-shirt",price:52.64,amount:150},
    {id:5,name:"Mascara",price:15.78,amount:40},
    {id:6,name:"TV",price:3500.80,amount:28},
    {id:7,name:"jacket",price:123.45,amount:80},
    {id:8,name:"book",price:28.70,amount:200},
    {id:9,name:"ThinkPad",price:2369.99,amount:50},
    {id:10,name:"shoes",price:98.65,amount:57}
  ]

  app.get('/products', function (req, res) {
    res.json(products);
   });

app.get('/product/:id', function (req, res) {
  res.send(JSON.stringify(products.find((product) => product.id == req.params.id)));
});
/*app.get('/products', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send({ products: products.slice(offset, offset + count), count: products.length });
  });*/

   app.listen(5500, () =>
     console.log(`App listening at port 5500`)
   );