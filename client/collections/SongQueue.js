// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  addSong: function(model) {

    // debugger;
    this.add(model.attributes);
  }

});



    // this.model.on('enqueue', function(){
    //   collection.addSong();
    // }, this);