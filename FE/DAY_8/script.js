console.log("Before Request");
fetch("https://api.chucknorris.io/jokes/random")
  .then(response => {
    return response.json();
  })
  .then(result => {
    document.write(`<h1>${result.value}</h1>`);
  });

$.ajax({
  url: "https://api.chucknorris.io/jokes/random",
  method: "GET",
  success: result => {
    console.log(result);
  },
  error: error => {
    document.write("Something went wrong, please refresh and try again!");
  }
});

console.log("After Request");
