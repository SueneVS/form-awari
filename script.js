var form=document.getElementById("contact-form");

function handleSubmit(event){
    event.preventDefault();

    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var message = form.elements["message"].value;

    var resultado = `Nome: ${name} \nE-mail: ${email} \nMensagem: ${message}`;
    alert(resultado);
}

  form.addEventListener("submit", handleSubmit)
