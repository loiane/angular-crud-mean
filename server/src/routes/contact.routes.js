const express = require('express');
const router = express.Router();

const contactAPI = '/contacts';

router.get(contactAPI, (req, res) => {
    const records = [{
        name: 'Contact 1',
        email: 'contact1@email.com',
        phone: '11111111'
    },{
        name: 'Contact 2',
        email: 'contact1@email.com',
        phone: '11111111'
    }]
    res.status(200).json(records);
});

module.exports = router;