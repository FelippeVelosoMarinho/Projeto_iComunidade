document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const loginStatus = document.getElementById("login-status"); // Define loginStatus element

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        login(username, password);
    });
});

function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "get_user_data.php", true); // Assuming you have a PHP file to fetch user data
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    console.log("Fetching user data...");

    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const userData = JSON.parse(xhr.responseText);
                // Update the content on the page with user data
                const resultsDiv = document.getElementById("results");
                resultsDiv.innerHTML = `<p>Nome: ${userData.nome}</p><p>Email: ${userData.email}</p>`;
            }
        } catch (error) {
            console.error("Erro ao analisar a resposta JSON:", error);
        }
    };

    xhr.send();
}


function login(username, password) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "./login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // printar xhr 
    console.log(xhr);
    console.log("Enviando requisição de login...");

    xhr.onreadystatechange = function () {
        try {
            console.log("Recebendo resposta...");
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const loginStatus = document.getElementById("login-status"); // Define loginStatus element
                if (response.success) {
                    loginStatus.textContent = "Login bem-sucedido!";
                    alert("Login bem-sucedido!");
                    fetchData();
                } else {
                    loginStatus.textContent = "Nome de usuário ou senha incorretos.";
                    alert("Nome de usuário ou senha incorretos.");
                }
            }
        } catch (error) {
            console.error("Erro ao analisar a resposta JSON:", error);
        }
    };

    const data = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    xhr.send(data);
}
