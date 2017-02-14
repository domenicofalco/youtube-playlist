const MongoClient = require('mongodb').MongoClient;
let db;

module.exports = {

  connectToServer: function(callback) {
    MongoClient.connect('mongodb://localhost/youtubeplaylist', (err, database) => {
      db = database;
      return callback(err);
    });
  },

  getDb: function() {
    return db;
  }

};
