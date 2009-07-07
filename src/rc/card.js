/**
 * Represents a single card unit
 *
 * @copyright 2009 Nikolay V. Nemshilov aka St.
 */
RC.Card = new Class(Observer, {
  extend: {
    EVENTS: $w('click'),
    
    SUITS: {
      spades:   2660,
      hearts:   2665,
      diamonds: 2666,
      clubs:    2663
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
      'normal',
      'big'
    ],
    
    DEFAULT_SIZE: 'normal'
  },
  
  suit: null,
  rank: null,
  size: null,
  
  initialize: function(rank, suit, size) {
    this.rank = rank;
    this.suit = suit;
    
    this.build();
    
    this.setSize(size);
    
    this.$super();
    this.element.on('click', this.click.bind(this));
  },
  
  open: function() {
    this.back.hide();
    this.face.show();
    
    return this;
  },
  
  hide: function() {
    this.face.hide();
    this.back.show();
    
    return this;
  },
  
  flip: function() {
    if (this.opened()) {
      this.hide();
    } else {
      this.open();
    }
    
    return this;
  },
  
  opened: function() {
    return this.back.hidden();
  },
  
  hidden: function() {
    return this.face.hidden();
  },
  
  setSize: function(size) {
    this.element.removeClass('rc-tiny').removeClass('rc-small'
      ).removeClass('rc-normal').removeClass('rc-big'
      ).addClass('rc-'+ (size || RC.Card.DEFAULT_SIZE));
    
    return this;
  },
  
  build: function() {
    this.element = $E('div', {'class': 'rc-card rc-rank-'+this.rank+' rc-'+this.suit});
    
    this.back = $E('div', {'class': 'rc-back'}).insertTo(this.element).hide();
    this.face = $E('div', {'class': 'rc-face'}).insertTo(this.element);
    
    this.back.insert('<div class="rc-back-decoration"></div>');
    
    var suit = '&#x'+RC.Card.SUITS[this.suit]+';';
    
    this.face.insert('<div class="rc-face-name">'+this.rank+
      '<span class="rc-suit">'+suit+'</span></div>');
    
    if (this.rank == 'A') {
      this.face.insert('<div class="rc-card-decor"><div class="rc-card-picture">'+suit+'</div></div>');
    } else if (this.rank.match(/\d+/)) {
      this.rank.toInt().times(function(i) {
        this.face.insert('<div class="rc-card-dot rc-card-dot-'+(i+1)+'">'+suit+'</div>');
      }, this);
    } else {
      this.face.insert('<div class="rc-card-decor"><div class="rc-card-picture"></div></div>');
    }
  }
  
});