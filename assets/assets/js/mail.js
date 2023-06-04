const form = document.getElementById("ProductMail");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const order = formData.get("ProdectOrder");
  const telephone = formData.get("PhoneNumber");
  console.log(order, telephone);
});


function submitForm() {
    const order = document.getElementById("ProdectOrder").value;
    const telephone = document.getElementById("PhoneNumber").value;
    console.log(order, telephone);

    const params = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productOrder: order, phoneNumber: telephone })
      };

      console.log(params);


    fetch(
        'https://api.tsotan.mn/mail/test', params
    ).then(data => console.log(data))
     .catch(error => console.error(error));
}
  