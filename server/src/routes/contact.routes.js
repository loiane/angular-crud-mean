const express = require('express');
const router = express.Router();

const contactAPI = '/contacts';

router.get(contactAPI, (req, res) => {
  const records = [];

  for (let i = 1; i < 15; i++) {
    records.push({
      name: `Contact ${i}`,
      email: `contact${i}@email.com`
    });
  }
  res.status(200).json(records);
});

module.exports = router;
