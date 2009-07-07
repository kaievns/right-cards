/**
 * Represents the cards deck unit
 *
 * @copyright 2009 Nikolay V. Nemshilov aka St.
 */
RC.Deck = new Class({
  initialize: function() {
    this.cards = [];
    
    for (var rank in RC.Card.RANKS) {
      for (var suit in RC.Card.SUITS) {
        this.cards.push(new RC.Card(rank, suit));
      }
    }
  },
  
  shuffle: function() {
    this.cards = this.cards.shuffle();
    return this;
  },
  
  each: function() {
    this.cards.each.apply(this.cards, arguments);
    return this;
  },
  
  pull: function() {
    return this.cards.pull();
  }
});