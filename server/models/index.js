var { dbConnection } = require('../db');
// const Promise = require('bluebird');

const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};

const getUserId = (username, response) => {
  return new Promise((resolve, reject) => {
    var getId = `SELECT user_id FROM users WHERE name = "${username}"`;
    const callback = (err, results, fields) => {
      if (err) {
        response.writeHead(400, headers);
        response.end(err);
        reject(err);
      }

      resolve(results[0].user_id);
    };

    dbConnection.query(getId, callback);
  });
};

module.exports = {
  messages: {
    get: function () {
      let queryString;
      dbConnection.query(queryString, callback);
    }, // a function which produces all the messages
    post: function ({ username, message, roomname }, response) {
      var getId = `SELECT user_id FROM users WHERE name = "${username}"`;
      const callback = (err, results, fields) => {
        debugger;
        if (err) {
          response.writeHead(400, headers);
          response.end(err);
        }

        var queryString = `INSERT INTO messages(text, room, user_id) VALUES (${text}, ${roomname}, ${results[0].user_id})`;
        var callback = () => {
          response.writeHead(201, headers);
          response.end();
        };

        dbConnection.query(queryString, callback);
      };

      dbConnection.query(getId, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function (username, response) {
      getUserId(username, response).then((userId) => {
        response.writeHead(200, headers);
        response.end('User already exists');
      }
      ).catch((err) => {
        var queryString = `INSERT INTO users(name) VALUES ("${username}")`;
        var callback = (err, results, fields) => {
          debugger;
          if (err) {
            response.writeHead(400, headers);
            response.end(err);
          }
          response.writeHead(201, headers);
          response.end('Succsessfully created new user');
        };
        dbConnection.query(queryString, callback);
      });
    }
  }
};

