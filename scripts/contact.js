let form = document.querySelector("#contact-form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    // let message = document.querySelector("#message");
    // data.message = message.value;
    console.log(data);
    fetch('https://script.google.com/macros/s/AKfycbzSDdsxZJXNuYW7phW6YODkQIlI40zllGhHYRU4SOaFbhFmEVkoR4BVXWo6hCFasurx/exec', {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(data => {
            Swal.fire("Thanks for reaching out. Will Get back to you soon.😊");
        })
        .catch(err=>{
            Swal.fire("Some error occurred. Please try again later");
        });
})