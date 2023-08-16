function remove(id) {
    const form = new FormData();
    form.append('id', id);

    const url = "http://localhost:80/Projeto_iComunidade/remove.php";

    fetch(url, {
        method: 'POST',
        body: form
    }).then(response => {
        response.json().then(data => {
            alert(data.message);
            console.log(data.message);

            window.location.reload();
        })
    }).catch(error => {
        console.error(error);
    });
}