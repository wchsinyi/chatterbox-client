
var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    this.render();
  },

  render: function () {
    // debugger;
    Parse.readAll(function (arr) {
      var resultArr = arr.results;
      console.log(Array.isArray(arr));
      for (let index = 0; index < resultArr.length; index++) {
        MessagesView.renderMessage(resultArr[index]);
      }
    });
  },

  renderMessage: function (message) {
    // console.log(MessageView);
    // console.log(this.$chats)
    var currentMsg = MessageView.render({
      username: message.username, text: message.text
    });
    this.$chats.append(currentMsg);
  }


};


