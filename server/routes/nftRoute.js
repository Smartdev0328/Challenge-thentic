const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/new_nft_contact', async (req, res) => {
  try {
    const { key, chain_id, name, short_name, webhook_url, redirect_url } = req.body;
    await axios.post(req.body.url, {
      name,
      short_name,
      // webhook_url,
      // redirect_url,
      key,
      chain_id,
    },
      { headers: { 'content-type': 'application/json' } },
    )
      .then(result => {
        console.log('new_nft_contact')
        console.log(result.data);
        res.send(result.data)
      })
      .catch((err) => {
        res.send(err)
      })


  } catch (error) {
    console.log('error new_nft_contact')
    console.log(error)
    res.json({ error: "error" })
  }
});

router.post('/show_nft_contact', async (req, res) => {
  try {
    const { key, chain_id, url } = req.body;
    console.log(key, chain_id, url)
    const contact_url = url + `?key=${key}&?chain_id=${chain_id}`
    console.log(url)
    await axios.get(url,
      {
        params:
        {
          key: "aCkRmp8SU2bYGVC81KQ38TAleQVBRlE9",
          chain_id: 4
        }
      }
    )
      .then(result => {
        console.log('show_nft_contact')
        console.log(result.data);
        res.send(result.data)
      })
      .catch((err) => {
        res.send(err)
      })

  } catch (error) {
    console.log('error show_nft_contact')
    console.log(error)
    res.json({ error: "error" })
  }
});



router.post('/mint-nft', async (req, res) => {
  try {
    console.log('req.body.url');
    console.log(req.body.url);

    await axios.post(req.body.url, {
      contract: req.body.contract,
      nft_id: req.body.nft_id,
      redirect_url: req.body.redirect_url,
      webhook_url: req.body.webhook_url,
      nft_data: req.body.nft_data,
      key: req.body.key,
      chain_id: req.body.chain_id,
    },
      { headers: { 'content-type': 'application/json' } },
    )
      .then(result => {
        console.log('mint-nft')
        console.log(result.data);
        res.send(result.data)
      })
      .catch((err) => {
        res.send(err)
      })
  } catch (error) {
    console.log('error mint-nft')
    console.log(error)
    res.json({ error: "error" })
  }
});


module.exports = router;


