function Calcular() {


    var valor = parseInt(document.getElementById('valor').value);
    var valorOposto = valor.toString().split('').reverse().join('') * Math.sign(valor);
    var mostrarResultado = document.getElementById('mostrarResultado');
    var resultado;

    if (valor > 9) {
        if (valor === valorOposto) {
            resultado = 'Palíndromo';
        }
    
        else {
            resultado = 'Não Palíndromo';
        }
    }

    else {
        resultado = 'Não Palíndromo';
    }
    
   

    mostrarResultado.value = resultado;
}