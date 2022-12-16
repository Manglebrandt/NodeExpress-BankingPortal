const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', express.static(path.join(__dirname, 'views')));

app.set(express.static('public'));