
const express = require('express');
const router = express.Router();
// const importData = require("../data.json")


router.get('/testnodeapi', function (req, res) {
    res.send('Node server live now...');
});

// router.get('/getDemoData', function (req, res) {
//     res.send(importData);
// });

module.exports = router;