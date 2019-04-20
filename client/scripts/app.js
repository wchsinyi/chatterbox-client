var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    // debugger;
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.fetch2(App.stopSpinner);


  },

  fetch: function (callback = () => { }) {
    Parse.readAll(
      (data) => {
        // examine the response from the server request:
        for (let i = 0; i < data.results.length; i++) {
          if (data.results[i].roomname) {
            data.results[i].roomname = data.results[i].roomname.replace(/ /g, '_');
          } else {
            data.results[i].roomname = 'panic_room';
          }
        }
        Messages.initialData = data;
        MessagesView.render();
        callback();
      });
  },

  fetch2: function (callback = () => { }) {
    Parse.readAll(
      (data) => {
        for (let i = 0; i < data.results.length; i++) {
          if (data.results[i].roomname) {
            data.results[i].roomname = data.results[i].roomname.replace(/ /g, '_');
          } else {
            data.results[i].roomname = 'panic_room';
          }
        }
        Messages.initialData = data;
        RoomsView.render();
        callback();
      });
  },
  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
