import {
  moduleFor,
  test
} from 'ember-qunit';
import DS from 'ember-data';

var user;
var store;

moduleFor('adapter:gun', 'GunAdapter', {
  // Set up tests
  setup: function() {
    // Set up user record
    user = {
      id: 1,
      name: 'alex lafroscia',
      type: 'human'
    };
    store = DS.Store.create();
  },

  // Clean up after each test
  teardown: function() {
    user = null;
    store = null;
  }
});


/*
 * Create Record
 */
test('it thows an error when trying to create a record without an ID', function() {
  expect(1);
  var adapter = this.subject();
  delete user.id;
  throws(function() {
    adapter.createRecord(store, 'user', user);
  });
});


test('it returns a resolving promise when creating a record succeeds', function() {
  expect(2);
  var adapter = this.subject();
  return adapter.createRecord(store, 'user', user)
  .then(function(result) {
    equal(result.id, 1);
    equal(result.name, 'Alex LaFroscia');
  }).catch(function(result) {
    ok(false, 'Promise should have resolved');
  });
});


/*
 *test('it returns a failing promise when creating a record fails', function() {
 *  expect(1);
 *  var adapter = this.subject({peers: ['fake peer']});
 *  return adapter.createRecord(store, 'user', user)
 *  .then(function(user) {
 *    ok(false, 'Promise should not have resolve');
 *  })
 *  .catch(function(error) {
 *    ok(error);
 *  });
 *});
 */



/*
 * Find All
 */
test('it throws an error when trying to use findAll()', function() {
  expect(1);
  var adapter = this.subject();
  throws(function() {
    adapter.findAll();
  });
});


/*
 * Find Query
 */
test('it throws an error when trying to use findQuery()', function() {
  expect(1);
  var adapter = this.subject();
  throws(function() {
    adapter.findQuery();
  });
});
