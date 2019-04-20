var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
  },

  render: function () {
  },
  renderRoom: function (roomName) {
    // debugger;
    console.log(this.$chats)
    this.$select.append('<span>' + roomName + '</span>');
  }
};
