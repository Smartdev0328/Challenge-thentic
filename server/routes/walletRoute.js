const express = require('express');
const router = express.Router();
const axios = require('axios');

// mail verify code
router.post('/55', async (req, res) => {
    try {
        const api = `https://api.dex.guru/v2/tokens/search/${req.body.value}?network=bsc,eth,polygon,fantom,avalanche`;

        await axios.get(api)
            .then(result => {
                res.send(result.data)
            })
            .catch((err) => {
                res.send(err)
            })

    } catch (error) {
        console.log(error)
        res.json({ error: "error" })
    }
});

module.exports = router;
