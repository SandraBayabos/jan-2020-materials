$.ajax({
  method: "get",
  url: "https://next-message-board.herokuapp.com/messages",
  success: function(messages) {
    console.log(messages);
    $("#message-list").html("");
    messages.forEach(msg => {
      $("#message-list").append(`
        <div id=${msg.id} class="card text-center" style="width: 300px;">
          <div class="card-body">
            <p>${msg.text}</p>
          </div>
          <div class="card-footer text-muted">
            ${moment(msg.created_at).format("MMMM D, YYYY - h:mmA")}
          </div>
          <button class="delete-btn">Delete</button>
        </div>
      `);
    });
  }
});

$("form").submit(function(event) {
  event.preventDefault();
  const myMessage = $("input").val();
  $("input").val("");
  console.log(myMessage);
  $.ajax({
    method: "post",
    url: "https://next-message-board.herokuapp.com/messages",
    data: {
      text: myMessage
    },
    success: function(data) {
      console.log(data);

      const messages = data.message;
      $("#message-list").prepend(`
      <div id=${messages.id} class="card text-center" style="width: 300px;">
        <div class="card-body">
          <p>${messages.text}</p>
        </div>
        <div class="card-footer text-muted">
          ${moment(messages.created_at).format("MMMM D, YYYY - h:mmA")}
        </div>
        <button class="delete-btn">Delete</button>
      </div>
    `);
    },
    error: function(error) {
      console.log(error);
    }
  });
});

$("#message-list").on("click", ".delete-btn", function(e) {
  e.preventDefault();
  const messageId = e.target.parentNode.id;
  const message = e.target.parentNode;
  $.ajax({
    method: "post",
    url: `https://next-message-board.herokuapp.com/messages/delete/${messageId}`,
    success: function(data) {
      message.remove();
    }
  });
});
