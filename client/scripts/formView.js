var FormView = {

  $form: $('form'),
  $rooms: $('button'),
  $select: $('#rooms select'),
  $option: $('select'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$rooms.on('click', FormView.handleRoomSubmit);
    FormView.$option.on('change', FormView.filterRoom);
    $('body').on('click', '.username', FormView.beFriend);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var username = App.username;
    var txt = $('#message').val();
    var newMsg = new Messages.makeNewMsg(username, txt);
    Parse.create(newMsg);
  },

  handleRoomSubmit: function (event) {
    console.log('hiii');
    debugger;
    event.preventDefault();
    if (!$('#roomName').val() !== undefined) {
      var roomname = $('#roomName').val().replace(/ /g, '_');
      if (!Rooms.roomList.includes(roomname)) {
        FormView.$select.append("<option>" + roomname + "</option>");
        Rooms.roomList.push(roomname);
      }
    }
  },

  filterRoom: function (event) {
    event.preventDefault();
    var roomSelect = $('select').find(":selected").text();
    if (roomSelect === undefined) {
      roomSelect = 'panic_room';
    }
    if (roomSelect !== 'ALL_ROOM') {
      var str = ".chat." + roomSelect;
      var anti_str = ":not(.chat." + roomSelect + ")";
      $(str).show().siblings(anti_str).hide();
    } else {
      $(".chat").show()
    }
  },

  beFriend: function (event) {
    event.preventDefault();
    console.log("hi")
    console.log(typeof this);
    console.log($(this).parent());
    $(this).parent().toggleClass('test')
    // this.parent().css("background-color", "red");
  },
  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// event.target.innerHTML