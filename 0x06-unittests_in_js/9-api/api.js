const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) =>{
    res.send('Welcome to the payment system')
});

app.get('/cart/:id(\\d+)', (req, res) => {
    const cart_id = req.params.id;
    res.send(`Payment methods for cart ${cart_id}`);    
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;
