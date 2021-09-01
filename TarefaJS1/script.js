function adicionarTexto (idTabela){
    let texto = document.getElementById('textoAdicionar').value;

    if(!texto.trim()){
        document.getElementById('textoAdicionar').value = null;
        alert("Não é possível adicionar uma valor nulo na tabela!");
        return 0;
    }

    let tabela = document.getElementById(idTabela);
    let numeroLinhas = tabela.rows.lenght;
    let linha = tabela.insertRow(numeroLinhas);

    let celula1 = linha.insertCell(0);
    let celula2 = linha.insertCell(1);
    celula1.innerHTML = texto;
    celula2.innerHTML = "<button onclick='removerTexto(this)'>Remover Texto</button>"; //Será adicionado o botão de remover
    document.getElementById('textoAdicionar').value = null;
}

function removerTexto(linha){
    let i=linha.parentNode.parentNode.rowIndex; //Busca a linha que vai ser deletada e salva a variável
    document.getElementById('tabela').deleteRow(i);
}
