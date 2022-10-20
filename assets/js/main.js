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

    const timerEl=document.querySelector('.timer')
    let seconds = 30
    const intervalId=setInterval(function(){
        timerEl.innerHTML=seconds
        if (seconds===0){
            clearInterval(intervalId)
        }else{
            seconds--
        }

    },1000)

    function randomNumbers(min, max) {
        const numbersArray=[]
        const numbersEl = document.querySelector('.number')
        let random;
        for (i=0; i < 5; i++){
            random= Math.floor(Math.random() * (max - min + 1) ) + min;
            numbersArray.push(random)
            const string = numbersArray.join(' ')
            numbersEl.innerHTML=string
           /*  console.log(random)  */
        }
         /* console.log(string)  */
        return numbersArray
    }

     const listBotNumber=randomNumbers(0,100)
    console.log(listBotNumber) 



    /* console.log(timeMemory()) */
    
    setTimeout(timeMemory, 31000);
      
      function timeMemory () {
        const userNumbersArray=[]
        const numbersEl= document.querySelector('.number')
        numbersEl.classList.add('d-none')
        for (i=0; i < 5; i++){
            const UserMemoryNumber= Number((prompt('inserisci il numero che ti ricordi')))
            userNumbersArray.push(UserMemoryNumber)
        }
        compareArrays (listBotNumber, userNumbersArray )
         console.log(userNumbersArray); 
        
         function compareArrays (arrayBot, arrayUser){
             const arrayCompare = [];
             for (let i = 0; i < arrayBot.length; i++) {
                 for (let j=0; j < arrayUser.length; j++){


                 if (arrayBot[i]===arrayUser[j]){
                    if (!arrayCompare.includes(arrayBot[i])) {
                       const newArray= arrayCompare.push(arrayBot[i]);
                       const h3Elemt=document.querySelector('h3')
                       h3Elemt.innerHTML=('hai indovinato ' + (i+1) + ' numeri ')
                       const titleElement=document.querySelector('h4.title')
                       titleElement.innerHTML =('i numeri che hai ricordato sono: ')
                       const remember = document.querySelector('h4.rememberNumbers')
                       remember.innerHTML+=(arrayBot[i]+ ' ')

                       
                        console.log(newArray);
                    } 
            
                 
             }
             }
             }
             return arrayCompare
         }
        
         console.log(listBotNumber)
    }
    
 