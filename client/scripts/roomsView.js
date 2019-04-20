var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomList: [],


  initialize: function () {
    this.render();

  },

  allRooms: function () {
    Parse.readAll(function (arr) {
      var resultArr = arr.results;
      for (let i = 0; i < resultArr.length; i++) {
        RoomsView.roomList.push(resultArr[i].roomname);
      }
    });
    RoomsView.roomList = RoomsView.roomList.filter((i, idx, arr) => arr.indexOf(i) === idx);
  },


  render: function () {
    this.allRooms();
    var allR = RoomsView.roomList;
    for (let j = 0; j < allR.length; j++) {
      RoomsView.renderRoom(allR[j]);
    }
  },

  renderRoom: function (roomName) {
    this.$select.append('<option>' + roomName + '</option>');
  }
};
