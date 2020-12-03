// contactController.js

// import contact model
let Contact = require("./contactModel");

//  handle index action

exports.index = (req, res) => {
  Contact.get((err, contact) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "contacts retrieved succesfully",
      data: contact,
    });
  });
};

// handle create contact actions

exports.new = (req, res) => {
  var contact = new Contact();
  contact.nama = req.body.nama ? req.body.nama : contact.nama;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;

  // save the contact and check for error
  contact.save((err) => {
    if (err) res.send(err);
    res.json({
      message: "new contact created!",
      data: contact,
    });
  });
};

// handle view info
exports.view = (req, res) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) {
      res.send(err);
      res.json({
        message: "Contact detail Loading",
        data: contact,
      });
    }
  });
};

// handle update data
exports.update = (req, res) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) res.send(err);
    contact.nama = req.body.nama ? req.body.nama : contact.nama;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    // update data
    contact.save((err) => {
      if (err) res.json(err);
      res.json({
        message: "contact berhasil di update",
        data: contact,
      });
    });
  });
};

// handle delete
exports.delete = (req, res) => {
  Contact.remove(
    {
      _id: req.params.contact_id,
    },
    (err, contact) => {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "contact deleted",
      });
    }
  );
};
