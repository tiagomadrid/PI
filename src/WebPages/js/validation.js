document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = ""; // Limpa a mensagem de erro anterior
        
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        
        if (username === "" || password === "") {
            errorMessage.textContent = "Todos os campos são obrigatórios!";
            return false; // Impede o envio do formulário
        }

        // Simula o envio do formulário
        console.log("Formulário enviado com sucesso!");
        errorMessage.textContent = "Formulário enviado com sucesso!";
        return true;
    });
});
