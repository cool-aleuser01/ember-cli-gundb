import ApplicationAdapter from './application';
import Ember from 'ember';
import config from './config/environment';

export default ApplicationAdapter.extend({
  setupGun: function() {
    var gun = Gun({
      s3: {
        key: config.APP.AWS_ACCESS_KEY,
        secret: config.APP.AWS_SECRET_TOKEN,
        bucket: config.APP.AWS_BUCKET
      }
    });
    this.set('gun', gun);
  }.on('init'),

  find: function() {

  },

  createRecord: function(store, type, record) {
    // Throw an error and return if the record doesn't have an ID
    if (Ember.isBlank(record.is)) {
      throw new Error('ID is required for creation of new records');
    }

  },

  updateRecord: function() {

  },

  deleteRecord: function() {

  },

  findAll: function() {

  },

  findQuery: function() {

  }

});
