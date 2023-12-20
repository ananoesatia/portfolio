const scriptURL = "https://script.google.com/macros/s/AKfycbxCTFMPoiuvj9-Djn0tjIg4CB_PItPYn1FEqSjtUH6dnPLVmsVVWNq7UOXUIJ2YYB1Hcw/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("submit").textContent = "Please wait...";
    document.getElementById("submit").disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById("submit").textContent = "Send Succesfuly🤩";
            setTimeout(() => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("submit").textContent = "Send";
                document.getElementById("submit").disabled = false;
            }, 3500);
        }).catch(error => {
            document.getElementById("submit").textContent = "Please Try Again😘"
            document.getElementById("submit").disabled = false;
        });
});