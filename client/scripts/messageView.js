var MessageView = {
  render: _.template(`
      <div class="chat <%- roomname %>" >
      <div class="username"><%- username %></div>
      <div><%- text %></div>
      </div>
    `)
  //   render: _.template(`
  //   <div class="chat ">
  //     <div class="username"><%- username %></div>
  //     <div><%- text %></div>
  //   </div>
  // `)
};


// {/* <div class='chat blue'> </div>
// <div class='chat green'> </div> */}

// {/* <div class="chat" id="<%- roomname %>"  > */}
