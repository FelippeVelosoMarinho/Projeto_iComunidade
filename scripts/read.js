function showData() {
    const url = "http://localhost:80/Projeto_iComunidade/read.php";
    fetch(url,{
        method: 'GET',
    }).then(response => response.text())
    .then(response => {
        const results = document.getElementById("results"); // Adicione esta linha para obter a referência ao elemento correto
        results.innerHTML = response;
    })
    .catch(error => console.log(error))
}

window.addEventListener("load", () => {
    showData();
});