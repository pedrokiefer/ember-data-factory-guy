FactoryGuy.define("outfit", {
  sequences: {
    name: function(num) {return 'Outfit' + num}
  },
  default: {
    name: FactoryGuy.generate('name')
  }
});
