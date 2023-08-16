function createUser() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const turma = document.getElementById("turma").value;

    const form = new FormData();

    form.append("nome", nome);
    form.append("email", email);
    form.append("senha", senha);
    form.append("turma", turma);

    const url = "http://localhost:80/Projeto_iComunidade/register.php";

    fetch(url, {
        method: "POST",
        body: form
    }).then(response => {
        response.json().then(result => {
            //console.log(result);
            Swal.fire(result.message);
            alert(result.message);
            window.location.href = "http://localhost:80/Projeto_iComunidade/pages/controlCenter.html";
        })
    }).catch(err => console.error(err));
}