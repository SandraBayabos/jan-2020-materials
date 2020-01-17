$(document).ready(() => {
  const fetchAndUpdateMessages = () => {
    $.ajax({
      method: "GET",
      url: "https://next-message-board.herokuapp.com/messages",
      success: results => {
        $("#board").html("");
        results.forEach(msg => {
          $("#board").append(`
              <div class="card text-center mt-4" style="width: 300px;">
                <div class="card-body">
                  <p>${msg.text}</p>
                </div>
                <div class="card-footer text-muted">
                  ${moment(msg.created_at).format("MMMM D, YYYY - h:mmA")}
                </div>
                <button class="delete-btn" data-msg-id="${
                  msg.id
                }">Delete</button>
              </div>
            `);
        });
        $(".delete-btn").on("click", e => {
          $.ajax({
            method: "POST",
            url: `https://next-message-board.herokuapp.com/messages/delete/${$(
              e.target
            ).data("msg-id")}`,
            success: response => {
              fetchAndUpdateMessages();
            },
            error: error => {
              console.log(error);
            }
          });
        });
      }
    });
  };

  fetchAndUpdateMessages();

  $("#submit-btn").on("click", e => {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "https://next-message-board.herokuapp.com/messages",
      data: {
        text: $("#new-message").val()
      },
      success: results => {
        fetchAndUpdateMessages();
        $("#new-message").val("");
      },
      error: error => {
        console.log(error);
      }
    });
  });
});
