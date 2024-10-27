// const msg = document.getElementById("msg")
// const user = document.getElementById('name')
// const submit = document.getElementById('submit')
const form = document.getElementById('form')

async function handleSubmit(e){
    e.preventDefault()
    const newForm = new FormData(form)
    const body = Object.fromEntries(newForm);

    const response = await fetch("http://localhost:4040/message", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(body)
    })

    const data = await response.json();
    console.log(data);
}

form.addEventListener("submit", handleSubmit);