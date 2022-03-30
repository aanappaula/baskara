function delta(a, b, c){
    return (b*b) - (4*(a*c))
}

function baskara(a, b, c){
    const ValorDelta = delta(a, b, c)
    if (ValorDelta < 0)
        return ({ x1: "Inexistente", x2: "Inexistente" })
    else{
        const valor_x1 = (-b + Math.sqrt(ValorDelta)) / (2 * a)
        const valor_x2 = (-b - Math.sqrt(ValorDelta)) / (2 * a)
        return ({x1: valor_x1, valor_x2})
    }
}

function handleBtnCalcular(){
    const vA = document.getElementById('ValorA').value
    const vB = document.getElementById('ValorB').value
    const vC = document.getElementById('ValorC').value
    const raizes = baskara(vA, vB, vC)
    document.getElementById('resultadoX1').innerHTML = raizes.x1
    document.getElementById('resultadoX2').innerHTML = raizes.x2
}

document.getElementById('BtnCalcular').addEventListener('click', handleBtnCalcular);

