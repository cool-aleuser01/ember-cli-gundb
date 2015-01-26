import Ember from 'ember';
import DS from 'ember-data';

export default DS.Adapter.extend({

  find: function() {
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
    if (Ember.isBlank(record.is)) {
      throw new Error('ID is required for creation of new records');
    }

  },

  updateRecord: function(store, type, record) {
    if (Ember.isBlank(record.id)) {
      throw new Error('ID is required for updating record');
    }

    return new Ember.RSVP.Promise(function(resolve, reject) {
      var gun = this.get('gun');
      gun.load(type + '/' + record.id).blank(function() {
        reject();
      }).set(record).then(function() {
        resolve(record);
      });
    });
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
