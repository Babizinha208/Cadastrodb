document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    // Não usamos preventDefault() para permitir o envio normal do formulário
    // event.preventDefault(); 

    // Você pode adicionar validação aqui, se necessário.
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const empresa = document.getElementById("empresa").value;
    const email = document.getElementById("email").value;
    const ddd = document.getElementById("ddd").value;
    const telefone = document.getElementById("telefone").value;
    const sexo = document.getElementById("sexo").value;
    const iniciante = document.querySelector('input[name="iniciante"]:checked');

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!nome || !sobrenome || !email || !ddd || !telefone || !sexo || !iniciante) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault(); // Impede o envio se houver campos obrigatórios não preenchidos
    }
});