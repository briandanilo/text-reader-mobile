'use strict';

module.exports = function(app) {

    var petStatus = require('../controllers/petEventController');
  // petStatus Routes
    app.route('/')
        .get(petStatus.helloWorld)

    app.route('/petEvents')
        .get(petStatus.listAllPetEvents)
        .post(petStatus.createAPetEvent);

    app.route('/petEvents/:petEventId')
        .delete(petStatus.deleteAPetEvent);


    app.route('/petEvents/query')
        .post(petStatus.findPetEvents);

};
