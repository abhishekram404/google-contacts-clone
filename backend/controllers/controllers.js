const Contact = require("../models/models");
const validator = require("../validator");

exports.list = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    return await res.status(200).send(contacts);
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.create = async (req, res) => {
  const { error } = await validator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const {
      firstName,
      surname,
      company,
      jobTitle,
      email,
      countryCode,
      phone,
      notes,
    } = req.body;

    phone.forEach(async (number) => {
      const found = await Contact.find({ phone: number });
      if (found) {
        const updated = await Contact.findOneAndUpdate(
          found,
          {
            firstName: firstName.trim(),
            surname: surname.trim(),
            company: company.trim(),
            jobTitle: jobTitle.trim(),
            email: email.trim(),
            countryCode: countryCode.trim(),
            notes: notes.trim(),
          },
          { new: true }
        );
        return await res.send(updated);
      }
    });

    const contact = await Contact.create({
      firstName: firstName.trim(),
      surname: surname.trim(),
      company: company.trim(),
      jobTitle: jobTitle.trim(),
      email: email.trim(),
      countryCode: countryCode.trim(),
      phone: phone,
      notes: notes.trim(),
    });
    await res.status(200).send(contact);
  } catch (err) {
    res.send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const c = await Contact.deleteMany({});
    await res.send(c);
  } catch (err) {
    res.status(500).send(err);
  }
};
