
var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function (data) {
    var resultArr = data.results;
    for (let i = 0; i < resultArr.length; i++) {
      MessagesView.renderMessage(resultArr[i]);
    }
  },

  renderMessage: function (msg) {

    var currentMsg = MessageView.render({
      username: msg.username, text: msg.text, roomname: msg.roomname
    });
    this.$chats.append(currentMsg);
  },

};


    // msg = this.escapeHtml(msg);
    // console.log(msg.roomname);
    // msg.roomname.forEach(function (each) {
    //   each = each.replace(/\s/g, "hi");
    // })
    // console.log(msg.roomname.replace(/ /g, '_'));

<<<<<<< HEAD
};

// CrossSite Scripting Attack
=======
  // escapeHtml: function (unsafe) {
  //   unsafe.text = unsafe.text
  //     .replace(/&/g, "&amp;")
  //     .replace(/</g, "&lt;")
  //     .replace(/>/g, "&gt;")
  //     .replace(/"/g, "&quot;")
  //     .replace(/'/g, "&#039;");
  //   return unsafe;
  // }
>>>>>>> e4780110923ad05519aecead3284a679b22a8609
