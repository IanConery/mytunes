// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  addSong: function(model) {
    this.add(model);

    if (this.models.length === 1) {
      model.play();
    }
  },

  // removeSong: function(song) {
  //   // this.remove(song);
  //   debugger;
  // }

});



    // this.model.on('enqueue', function(){
    //   collection.addSong();
    // }, this);