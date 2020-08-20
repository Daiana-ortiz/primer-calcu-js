document.getElementById('num1').addEventListener('click', n1)
document.getElementById('num2').addEventListener('click', n2)
document.getElementById('num3').addEventListener('click', n3)
document.getElementById('num4').addEventListener('click', n4)
document.getElementById('num5').addEventListener('click', n5)
document.getElementById('num6').addEventListener('click', n6)
document.getElementById('num7').addEventListener('click', n7)
document.getElementById('num8').addEventListener('click', n8)
document.getElementById('num9').addEventListener('click', n9)
document.getElementById('num0').addEventListener('click', n0)
document.getElementById('sumar').addEventListener('click', o1)
document.getElementById('restar').addEventListener('click', o2)
document.getElementById('multiplicar').addEventListener('click', o3)
document.getElementById('dividir').addEventListener('click', o4)
document.getElementById('igual').addEventListener('click', showResult)

function n1 () {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num1').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}

function n2() {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num2').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}

function n3() {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num3').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}

function n4() {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num4').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}

function n5() {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num5').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}

function n6() {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num6').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}

function n7() {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num7').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}

function n8() {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num8').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}

function n9() {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num9').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}

function n0() {
    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('num0').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado
}


function o1() {

    let actual = document.getElementById('resultado').innerHTML
    let sumado = document.getElementById('sumar').innerHTML
    document.getElementById('resultado').innerHTML = actual + sumado 

}

function o2() {

    let actual = document.getElementById('resultado').innerHTML
    let restado = document.getElementById('restar').innerHTML
    document.getElementById('resultado').innerHTML = actual + restado 

}

function o3() {

    let actual = document.getElementById('resultado').innerHTML
    let multiplicar = document.getElementById('multiplicar').innerHTML
    document.getElementById('resultado').innerHTML = actual + multiplicar

}

function o4() {

    let actual = document.getElementById('resultado').innerHTML
    let dividir = document.getElementById('dividir').innerHTML
    document.getElementById('resultado').innerHTML = actual + dividir

}

function showResult() {

    let actual = document.getElementById('resultado').innerHTML
    let suma = actual.indexOf('+');
    let resta = actual.indexOf('-');
    let multiplicado = actual.indexOf('*');
    let division = actual.indexOf('÷');

    if (suma !== -1) {
        arr = actual.split('+', 2);
        res = parseInt(arr[0]) + parseInt(arr[1]);
        document.getElementById('resultado').innerHTML = res; 
        
    } else if (resta !== -1) {
        arr = actual.split('-', 2);
        res = parseInt(arr[0]) - parseInt(arr[1]);
        document.getElementById('resultado').innerHTML = res; 
    }

    else if (multiplicado !== -1) {
        arr = actual.split('*', 2);
        res = parseInt(arr[0]) * parseInt(arr[1]);
        document.getElementById('resultado').innerHTML = res; 
    }

    else if (division !== -1) {
        arr = actual.split('÷', 2);
        res = parseInt(arr[0]) / parseInt(arr[1]);
        document.getElementById('resultado').innerHTML = res; 
    }

} // fin funcion showResult