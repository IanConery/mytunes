// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,

  initialize: function(){
  },

  events: {
    'enqueue:model': 'addSong'
  },

  addSong: function() {
    this.collection.add(this.model);
  }
});