const express = require('express');
const { urlencoded, json } = require('body-parser');
const cors = require('cors');


const app = express();


app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

const items = [{
        "id": 1,
        "naziv": "Dalmatinsko maslonovo ulje",
        "tip": "ulje",
        "cena": 1200,
        "brojArtikala": 10,
        "opis": "Nerafinisano hladno cedjeno maslinovo ulje iz dalmacije"
    },
    {
        "id": 2,
        "naziv": "Kantarionovo ulje",
        "tip": "ulje",
        "cena": 1000,
        "brojArtikala": 8,
        "opis": "Nerafinisano hladno cedjeno maslinovo ulje iz dalmacije"
    },
    {
        "id": 3,
        "naziv": "Sirup od nane",
        "tip": "sirup",
        "cena": 800,
        "brojArtikala": 8,
        "opis": "Sirup od nane pravljen prirodnim putem"
    },
    {
        "id": 4,
        "naziv": "Sirup od zove",
        "tip": "sirup",
        "cena": 800,
        "brojArtikala": 8,
        "opis": "Sirup od zove pravljen prirodnim putem"
    }
];


app.get('/', (req, res, next) => {
    try {
        res.send("Hello world");
    } catch (err) {
        next(err);
    }
});

app.get('/items', (req, res, next) => {
    try {
        res.status(200).json(items);
    } catch (err) {
        next(err);
    }
});

module.exports = app;