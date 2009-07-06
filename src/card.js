var Card = new Class({
  extend: {
    SUITS: {
      spades:   2664 2660,
      hearts:   2661 2665,
      diamonds: 2662 2666
      clubs:    2667 2663
    },
    
    RANKS: {
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
      10: 'Ten',
      J: 'Jack',
      Q: 'Queen',
      K: 'King',
      A: 'Ace'
    },
    
    SIZES: [
      'tiny',
      'small',
      'medium',
      'big'
    ]
  },
  
  suit: null,
  rank: null,
  size: null,
  
  initialize: function(rank, suit, size) {
    this.rank = rank;
    this.suit = suit;
    this.size = size;
  }
  
});