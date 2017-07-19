'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PetEventSchema = new Schema({
  petName: {
    type: String,
    Required: 'The name of the pet'
  },
  userName: {
    type: String,
    Required: 'The name of the user'
  },
  eventTime: {
    type: Date,
    default: Date.now,
    Required: 'The time of the event'
  },
  eventType: {
    type: String,
    enum: ['food', 'potty', 'potty_1', 'potty_2', 'walk'],
    Required: 'The type of event'
  }
});

module.exports = mongoose.model('PetEvents', PetEventSchema);
