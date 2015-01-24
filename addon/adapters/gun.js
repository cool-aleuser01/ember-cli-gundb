import Ember from 'ember';
import DS from 'ember-data';

export default DS.Adapter.extend({

  // Store the instance of Gun as a property of the adapter
  gun: null,

  init: function(options) {
    // Whatever options are passed to the Gun Adapter on creation
    // will be passed to Gun
    var gun = new Gun(options);
    this.set('gun', gun);
  },

  createRecord: function(store, type, record) {
    // Throw an error and return if the record doesn't have an ID
    if (Ember.isBlank(record.id)) {
      throw new Error('ID is required for creation of new records');
    }
    var gun = this.get('gun');
    return new Ember.RSVP.Promise(function(resolve, reject) {
      gun.load(type + "/" + record.id).blank(function() {
        console.log('here we are!');
        // If the key is blank, set it
        this.set(record, function(error) {
          // If there is an error, reject the promise with the error
          console.log(error);
          reject(error);
        });
      }).get(function(result) {
        // If everything went fine, resolve the promise with the object
        console.log(result);
        resolve(result);
      });
    });
  },

  updateRecord: function() {

  },

  deleteRecord: function(store, type, record) {

  },

  find: function(store, type, record) {

  },

  findAll: function() {
    throw new Error('findAll() is not yet supported by Gun');
  },

  findQuery: function() {
    throw new Error('findQuery() is not yet supported by Gun');
  }

});
