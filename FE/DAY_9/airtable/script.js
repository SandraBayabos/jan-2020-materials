$(document).ready(() => {
  // Rest of my code here

  /* Retrieve All Records */

  $.ajax({
    url: "https://api.airtable.com/v0/appxayvAOO1GJa9Yd/shoes",
    method: "GET",
    headers: {
      Authorization: "Bearer YOUR_API_KEY"
    },
    success: result => {
      console.log(result);
      result.records.forEach(record => {
        console.log(record);
        let imageUrl;
        if (!record.fields.images || record.fields.images.length == 0) {
          imageUrl = "https://via.placeholder.com/300x200";
        } else {
          imageUrl = record.fields.images[0].thumbnails.large.url;
        }
        $("#product-container").append(
          `<div class="card" style="width: 18rem;">
            <h2 class="card-title">${record.fields.productName}</h2>
            <img class="card-img-top" src="${imageUrl}" alt="${record.fields.productName}" />
            <div class="card-body">
              <h5>RM${record.fields.price}.00</h5>
              <p>${record.fields.productDescription}</p>
            </div>
           <div>
          `
        );
      });
    },
    error: error => {
      console.log("Error: ", error);
    }
  });

  /* Add new record */

  let formData = {
    fields: {
      "Product Name": "Burgers",
      "Offered Price": 1,
      Notes: "Hello"
    }
  };

  $.ajax({
    url: "https://api.airtable.com/v0/appxayvAOO1GJa9Yd/order",
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(formData),
    success: result => {
      console.log(result);
    },
    error: error => {
      console.log("Error: ", error);
    }
  });
});
