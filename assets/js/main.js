/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
 Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


 //ordine delle istruzioni
 //creo un div nella dom, seleziono la dom e assegno tramite il math number e il ciclo for i 5 numeri casuali
 //utilizzo setTimeOut e invoco una funzione che creo successivamente (30 secondi=30000ms)
 //dentro la funzione che ho invocato seleziono dapprima l'elemento div della dom. Successivamente aggiungo la classe d-none per far sparire i miei numeri.
 //creo sempre nella funzione 5 prompt con il ciclo for


    /* for (i=0; i < 5; i++){
       const randomNumbers = Math.floor(Math.random() * 101);
       console.log(randomNumbers)

    } */
    function randomNumbers(min, max) {
        const numbersEl = document.querySelector('.number')
        numbersArray=[]
        for (i=0; i < 5; i++){
        const random= Math.floor(Math.random() * (max - min + 1) ) + min;
        numbersArray.push(random)
        console.log(random) 
    }
    const string = numbersArray.join(' ')
    numbersEl.innerHTML=string
      }

      randomNumbers(0,100)

      setTimeout(timeMemory, 30000);

      function timeMemory () {
        const numbersEl= document.querySelector('.number')
        numbersEl.classList.add('d-none')
      }