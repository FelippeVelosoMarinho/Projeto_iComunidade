function login(username, password) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                loginStatus.textContent = "Login bem-sucedido!";
                alert("Login bem-sucedido!");
                fetchData();
            } else {
                loginStatus.textContent = "Nome de usuário ou senha incorretos.";
                alert("Nome de usuário ou senha incorretos.");
            }
        }
    };

    const data = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    xhr.send(data);
}

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        login(username, password);
    });
});
