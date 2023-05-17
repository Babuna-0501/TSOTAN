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
        'http://ec2-13-250-36-132.ap-southeast-1.compute.amazonaws.com:8080/mail/test', params
    ).then(data => console.log(data))
     .catch(error => console.error(error));
}
  