var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),



  initialize: function () {
  },


  render: function (data) {
    var resultArr = data.results;
    var uniqueRooms = [];
    for (let i = 0; i < resultArr.length; i++) {
      if (!uniqueRooms.includes(resultArr[i].roomname)) {
        RoomsView.renderRoom(resultArr[i].roomname);
        uniqueRooms.push(resultArr[i].roomname);
      }
    }
    Rooms.roomList = uniqueRooms;
  },



  renderRoom: function (roomName) {
    this.$select.append('<option>' + roomName + '</option>');
  }
};
