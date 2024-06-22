document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const criarTarefaForm = document.getElementById("criarTarefaForm");
    const editarTarefaForm = document.getElementById("editarTarefaForm");

    if (registroForm) {
        registroForm.addEventListener("submit", function (e) {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            if (!username || !password) {
                alert("Todos os campos são obrigatórios.");
                e.preventDefault();
            }
        });
    }

    if (criarTarefaForm) {
        criarTarefaForm.addEventListener("submit", function (e) {
            const titulo = document.getElementById("titulo").value;
            const descricao = document.getElementById("descricao").value;
            if (!titulo || !descricao) {
                alert("Todos os campos são obrigatórios.");
                e.preventDefault();
            }
        });
    }

    if (editarTarefaForm) {
        editarTarefaForm.addEventListener("submit", function (e) {
            const titulo = document.getElementById("titulo").value;
            const descricao = document.getElementById("descricao").value;
            if (!titulo || !descricao) {
                alert("Todos os campos são obrigatórios.");
                e.preventDefault();
            }
        });
    }
});
