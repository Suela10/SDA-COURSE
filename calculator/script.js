function calculator() {
    cost number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(dokument.getElementById('number2.value');
    cost operation = dokument.getElementById('operation').value;
    let results;

    if (operation=== 'add') {
        results = number1 + number2;

    }else if (operation=== 'substract') {
        results=number1 - number2;
    }

    document.getElementById('result').textContent = 'Result: ' + results;
}