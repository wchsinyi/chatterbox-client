var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),



  initialize: function () {
    // this.render();

  },


  allRooms: function () {
    var roomList = [];
    var resultArr = Messages.initialStorage.results;
    console.log('resultArr', resultArr);
    for (let i = 0; i < resultArr.length; i++) {
      roomList.push(resultArr[i].roomname);
    }
    console.log('rooms', roomList);
    debugger;
    var uniqueRooms = roomList.filter((i, idx, arr) => arr.indexOf(i) === idx);
    console.log('uniqueRooms', uniqueRooms);
    return uniqueRooms;
  },


  render: function () {
    var allR = this.allRooms();
    for (let j = 0; j < allR.length; j++) {
      RoomsView.renderRoom(allR[j]);
    }


  },

  renderRoom: function (roomName) {
    this.$select.append('<option>' + roomName + '</option>');
  }
};
