function calculateTip(event) {
    // previne o recarregamento automático da página.
    event.preventDefault();

    // Recebe os valores que são recebidos no input.
    var bill = document.getElementById('bill').value;
    var serviceQual = document.getElementById('serviceQual').value;
    var numOfPeople = document.getElementById('people').value;

    // Se a conta ou a qualidade do serviço for igual a zero ou vazio, exibe um alerta e imterrompe a função.
    if (bill == '' | serviceQual == 0) {
        alert("Por favor, preeencha os valores")
        return;
    }

    if (numOfPeople == "" | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none"
    }
    else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

// Bloqueia a exibição antes do tempo na calculadora.
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

// Pega o elemento pelo Id "submit" e aguarda um evento, após esse evento executa a função "calculateTips".
document.getElementById('tipsForm').addEventListener('submit', calculateTip);