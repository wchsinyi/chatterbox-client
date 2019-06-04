var Messages = {
  initialData: [],
  makeNewMsg: function (username, text) {
    this.username = username;
    this.roomname = $('select').find(":selected").text(); //
    this.text = text;
  }
};




