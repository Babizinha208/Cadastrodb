<?php
if (isset($_POST['submit'])) {
    include_once('config.php');

    // Obter dados do formulário
    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $empresa = $_POST['empresa'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $sexo = $_POST['sexo'];
    $iniciante = $_POST['iniciante'];

    // Inserindo os dados na tabela
    $sql = "INSERT INTO usuarios (nome, sobrenome, empresa, email, telefone, sexo, nivel_iniciante) VALUES ('$nome', '$sobrenome', '$empresa', '$email', '$telefone', '$sexo', '$iniciante')";

  // Executar a declaração
if ($conexao->query($sql) === TRUE) {
    echo "Cadastro realizado com sucesso!";
} else {
    echo "Erro ao cadastrar: " . $stmt->error; // Mensagem de erro
}
}   

?>
