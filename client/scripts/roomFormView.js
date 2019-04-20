var roomFormView = {

  $rooms: $('#rooms'),

  initialize: function () {
    roomFormView.$rooms.on('submit', roomFormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var roomname = $('#roomName').val();
    Parse.create(newMsg);
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    roomFormView.$rooms.find('button[type=submit]').attr('disabled', status);
  }

};