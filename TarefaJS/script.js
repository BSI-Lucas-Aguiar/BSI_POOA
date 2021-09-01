function adicionarTexto (idTabela){
    let texto = document.getElementById('textoAdicionar').value;

    let tabela = document.getElementById(idTabela);
    let numeroLinhas = tabela.rows.lenght;
    let linha = tabela.insertRow(numeroLinhas);

    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    celula1.innerHTML = texto;
    celula2.innerHTML = 'Birl'; //Será adicionado o botão de remover

}

//botaoAdicionar.addEventListener('click', adicionarTexto);