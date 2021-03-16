const express = require('express');
const app = new express();
const port = 3000;

app.use("/static",express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
