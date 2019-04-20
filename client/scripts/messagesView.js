
var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    this.render();
  },


  render: function () {
    // debugger;
    Parse.readAll(function (arr) {
      var resultArr = arr.results;
      for (let i = 0; i < resultArr.length; i++) {
        MessagesView.renderMessage(resultArr[i]);
      }
    });
  },

  renderMessage: function (msg) {
    msg = this.escapeHtml(msg);
    var currentMsg = MessageView.render({
      username: msg.username, text: msg.text
    });
    this.$chats.append(currentMsg);
  },

  escapeHtml: function (unsafe) {
    unsafe.text = unsafe.text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
    return unsafe;
  }

};


