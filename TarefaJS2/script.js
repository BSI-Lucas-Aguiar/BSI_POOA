function calcularCirculo(){
    let raio = document.getElementById('raio').value;
    let area = (raio * raio)*Math.PI;
    alert("A área do círculo é: "+ area);
    console.log(area);
}

function calcularQuadrado(){
    let lado = document.getElementById('lado').value;
    let area = lado*lado;
    alert("A área do quadrado é: "+ area);
    console.log(area);
}

function calcularRetangulo(){
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;
    let area = base*altura;
    alert("A área do retângulo é: "+ area);
    console.log(area);
}