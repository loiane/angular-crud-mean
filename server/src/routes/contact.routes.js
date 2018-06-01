const express = require('express');
const router = express.Router();

const contactAPI = '/contacts';

router.get(contactAPI, (req, res) => {
  const records = [];

  for (let i = 1; i < 15; i++) {
    records.push({
      _id: i,
      name: `Contact ${i}`,
      email: `contact${i}@email.com`,
      phones: [{
        areaCode: '999',
        phoneNumber: '1234567890'
      }]
    });
  }
  res.status(200).json(records);
});

module.exports = router;
