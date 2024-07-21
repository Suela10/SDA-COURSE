function numbersInloops(a, b, c){
    for (var i = a; i <= b; i++){
        if (i % c === 0) {
            console.log(i);
        }
    }
    numbersInloops(10 ,20 ,3 )