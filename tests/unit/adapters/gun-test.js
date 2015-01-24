import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:gun', 'GunAdapter', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var adapter = this.subject();
  ok(adapter);
});


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
