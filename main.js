const row = document.querySelector('row-cols-10');
console.log(row);

for (let index = 1; index <= 100; index++) {
    
    if (index % 3 == 0 && index % 5 == 0) {
    const colaggiunta = document.createElement('div');
    colaggiunta.classList.add('col');
    colaggiunta.append(index);
    row.append(colaggiunta);
    console.log("fizzbuzz");
    colaggiunta.innerHTML += "fizzbuzz"
        }else if (index % 3 == 0){
            console.log("fizz");
            }else if (index % 5 == 0){
                console.log("buzz");
                } else{
                    console.log(index);
                }  
}

