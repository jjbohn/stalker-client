(function(module){
  function Stalker(user_id, traits) {
    this.identify(user_id, traits)
  }

  Stalker.prototype.identify = function(user_id, traits) {
    this.user_id = user_id;
    this.traits = traits || {};
  };

  module.exports = Stalker
})(typeof module == 'undefined' ? {} : module)
