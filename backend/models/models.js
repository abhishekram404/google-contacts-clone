const mongoose = require("mongoose");

const ContactModel = mongoose.Schema({
  firstName: { type: String },
  surname: { type: String },
  company: { type: String },
  jobTitle: { type: String },
  email: { type: String },
  countryCode: { type: String },
  phone: { type: Array, require: true },
  notes: { type: String },
  createdOn: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactModel);

module.exports = Contact;
