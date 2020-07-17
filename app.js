require('dotenv/config');
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const routers = require('./serve');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('api_key', process.env.API_KEY || 'secret');

app.use(routers);

app.listen(PORT, () => {
    console.log("Ready on http://localhost:" + PORT)
});
