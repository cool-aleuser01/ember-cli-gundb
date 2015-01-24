// Make the adapter available to the consuming app, while keeping the code
// within the package's namespace
import GunAdapter from 'ember-gun-adapter/adapters/gun';

// The Gun Adapter should be passed whatever options are meant to be passed to
// Gun when it is instantiated
export default GunAdapter.extend({});

