const express = require('express');
const router = express.Router();

const contactService = require('../service/contact.service');
const contactAPI = '/contacts';

/*router.get(contactAPI, (req, res) => {
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
});*/

router.get(contactAPI, (req, res) => {
  contactService.getAll(req, res);
});

router.post(contactAPI, (req, res) => {
  contactService.post(req, res);
});

router.put(`${contactAPI}/:id`, (req, res) => {
  contactService.put(req, res);
});

router.delete(`${contactAPI}/:id`, (req, res) => {
  contactService.remove(req, res);
});

module.exports = router;
