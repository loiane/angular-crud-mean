const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
      name: { type: String, require: true },
      email: String,
      phones: [{
          areaCode: String,
          phoneNumber: String
      }]
    },
    {
      collection: 'contacts',
      read: 'nearest'
    }
  );
  
  const Contact = mongoose.model('Contact', contactSchema);
  
  module.exports = Contact;