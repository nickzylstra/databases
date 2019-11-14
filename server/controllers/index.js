var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("SERVER HIT messages get");
      var data = req.body;
      models.messages.get(data, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("SERVER HIT messages posts");
      var data = req.body;
      models.messages.post(data, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("SERVER HIT users get");
      // ??????????????????
      // TODO
      // var data = req.body;
      // models.users.get(data.username, res);
    },
    post: function (req, res) {
      var data = req.body;
      models.users.post(data.username, res);
    }
  }
};

