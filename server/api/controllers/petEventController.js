'use strict';


var mongoose = require('mongoose'),
  PetEvent = mongoose.model('PetEvents');

exports.helloWorld = function(req, res) {
  res.send("hello world")
};

exports.listAllPetEvents = function(req, res) {
    // res.json({"did this work": "heck yes"});
  PetEvent.find({}, function(err, pet_event) {
    if (err)
      res.send(err);
    res.json(pet_event);
  });
};

exports.createAPetEvent = function(req, res) {
  var new_pet_event = new PetEvent(req.body);
  new_pet_event.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.deleteAPetEvent = function(req, res) {
    PetEvent.remove({
    _id: req.params.petEventId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'PetEvent successfully deleted' });
  });
};

exports.findPetEvents = function(req, res) {
    PetEvent.find(req.body, function(err, pet_events) {
        if (err)
            res.send(err);
        res.json(pet_events);
    });
};
