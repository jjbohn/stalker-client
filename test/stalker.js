require('should')
Stalker = require('../lib/stalker.js')

describe("Stalker", function() {
  var stalker;

  beforeEach(function() {
    stalker = new Stalker();
  });

  describe('#identify', function() {
    it("Should have matching user id on set identify", function() {
      stalker.identify('qwerty123456');
      stalker.user_id.should.equal('qwerty123456');
    });

    it("Should set arbitrary additional info", function() {
      stalker.identify('qwerty123456');
      stalker.traits.should.eql([]);

      traits = { first_name: 'John', last_name: 'Bohn', email: 'jjbohn@gmail.com' };
      stalker.identify('qwerty123456', traits);
      stalker.traits.should.equal(traits);
    });

  });

});
