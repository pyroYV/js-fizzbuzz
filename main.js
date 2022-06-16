const row = document.querySelector('.row');

for (let index = 1; index <= 100; index++) {
    const colAggiunta = document.createElement('div');
    colAggiunta.classList.add('col-4','text-center','text-white','rounded');
    row.append(colAggiunta);
    if (index % 3 == 0 && index % 5 == 0) {
    
    console.log("fizzbuzz");
    colAggiunta.innerHTML += "fizzbuzz"
    colAggiunta.classList.add('bg-secondary');
        }else if (index % 3 == 0){
            console.log("fizz");
            colAggiunta.innerHTML ="fizz";
            colAggiunta.classList.add('bg-primary');
            }else if (index % 5 == 0){
                console.log("buzz");
                colAggiunta.innerHTML ="buzz";
                colAggiunta.classList.add('bg-danger');
                } else{
                    console.log(index);
                    colAggiunta.innerHTML = index ;
                    colAggiunta.classList.add('bg-dark');
                }  
}

