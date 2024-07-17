const express = require('express');
const app = express();
const PORT = 7865;

app.listen(PORT, () => {
    console.log("API available on localhost port 7865", PORT);
});

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

module.exports = app;