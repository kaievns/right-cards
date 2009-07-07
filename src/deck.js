/**
 * Represents the cards deck unit
 *
 * @copyright 2009 Nikolay V. Nemshilov aka St.
 */
var Deck = new Class({
  initialize: function() {
    this.cards = [];
    
    for (var rank in Card.RANKS) {
      for (var suit in Card.SUITS) {
        this.cards.push(new Card(rank, suit));
      }
    }
  },
  
  shuffle: function() {
    this.cards.shuffle();
    return this;
  },
  
  each: function() {
    this.cards.each.apply(this.cards, arguments);
    return this;
  }
});