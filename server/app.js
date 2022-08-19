const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
const nftRoute = require('./routes/nftRoute.js');
const walletRoute = require('./routes/walletRoute.js');

const PORT = process.env.PORT;
let app = express();
// Body Parser Middleware
app.use(bodyParser.json({ limit: '200mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
app.use(express.static(path.join(__dirname, 'views/')));
app.use(cors());
// app.use((req, res, next) => {
//     res.header("content-type", "application/json");
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     if (req.method === 'OPTIONS') {
//         res.header("content-type", "application/json");
//         res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
//         return res.status(200).json({});
//     }
//     next();
// });
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

global.appRoot = path.resolve(__dirname);

app.use('/nft', nftRoute);
app.use('/wallet', walletRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(PORT, () => {
    console.log('Server started on port', PORT);
});