/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-gun-adapter',
  included: function(app) {
    app.import('node_modules/gun/gun.js');
  }
};
