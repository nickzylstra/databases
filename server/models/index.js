var db = require('../db');

const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};
module.exports = {
  messages: {
    get: function () {
      let queryString;
      db.query(queryString, callback);
    }, // a function which produces all the messages
    post: function ({username, message, roomname}, response) {
      var getId = `SELECT user_id FROM users WHERE name = "${username}"`;

      db.query(getId, (userId) => {
        debugger
        var queryString = `INSERT INTO messages(text, room, user_id) VALUES (${text}, ${roomname}, ${userId})`;

        var callback = () => {
          response.writeHead(201, headers);
          response.end();
        };
        db.query(queryString, callback );
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, response) {
      var queryString = `INSERT INTO users(name) VALUES (${username})`;
      var callback = () => {
        response.writeHead(201, headers);
        response.end();
      };

      db.query(queryString, callback);
    }
  }
};

