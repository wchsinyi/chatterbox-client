var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form

    event.preventDefault();
    // debugger;
    console.log('click!');
    console.log(this);
    console.log(App.username);
    var txt = $('#message').val();
    console.log(txt);


    var newMsg = new Messages(App.username, txt);

    Parse.create(newMsg);
    console.log(newMsg);
    // Parse.create(currentMsg)
    // $('.submit').on('click', function (event) {
    //   $('#chat').append('<span>hi</span>');
    // });


  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};