const express = require('express')
const path = require("path");

const app = express();

app.listen(8080);

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public')})
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: path.join(__dirname, 'public')})
});

app.get('/contact', (req, res) => {
    res.sendFile('contact.html', { root: path.join(__dirname, 'public')})
});

app.use(express.static('public'))

app.use((req, res) => {
    res.status(404).sendFile('404.html', { root: path.join(__dirname, 'public') })
})
