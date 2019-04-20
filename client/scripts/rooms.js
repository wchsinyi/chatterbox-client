var Rooms = function () {
  this.listRoom = [];
};

Rooms.prototype.add = function (v) {
  debugger;
  this.listRoom.push(v);
  RoomsView.renderRoom(v);
  return this.listRoom;

}


