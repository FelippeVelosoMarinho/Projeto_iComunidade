function getId(id) {
    const form = new FormData();
    form.append('id', id);

    const url = "http://localhost:80/Projeto_iComunidade/get_id.php";

    fetch(url, {
        method: "POST",
        body: form
    }).then(response => {
        response.json().then(data=>{
            //console.log(data);
            window.localStorage.setItem('aluno', JSON.stringify(data));
            console.log("Aluno: " + data[0].nome);
            window.location.href = "http://localhost:80/Projeto_iComunidade/pages/update.html";
        })
    })
}
userData();
function userData() {
    const data = JSON.parse(window.localStorage.getItem('aluno'));
    const aluno = data[0];

    document.getElementById('nome_1').value = aluno.nome;
    document.getElementById('email_1').value = aluno.email;
    document.getElementById('turma_1').value = aluno.turma;
    document.getElementById('senha_1').value = aluno.senha;
}

function updateUser() {
    //pegar o id do local storage
    const id = JSON.parse(window.localStorage.getItem('aluno'))[0].id;
    const nome = document.getElementById('nome_1').value;
    const email = document.getElementById('email_1').value;
    const turma = document.getElementById('turma_1').value;
    const senha = document.getElementById('senha_1').value;

    const form = new FormData();

    form.append('id', id);
    form.append('nome', nome);
    form.append('email', email);
    form.append('turma', turma);
    form.append('senha', senha);

    const url = "http://localhost:80/Projeto_iComunidade/update.php";

    fetch(url, {
        method: "POST",
        body: form
    }).then(response => {
        response.json().then(data=>{
            console.log(data);
            window.location.href = "http://localhost:80/Projeto_iComunidade/pages/index.html";
        })
    })
}