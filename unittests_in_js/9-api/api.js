const express = require('express');
const app = express();
const PORT = 7865;

app.listen(PORT, () => {
    console.log("API available on localhost port 7865", PORT);
});

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const { id } = req.params;
    if(!(isNaN(Number(id)))) {
        res.send('Payment methods for cart ' + id);
    } else {
        res.status(404);
        res.end();
    }
});

module.exports = app;