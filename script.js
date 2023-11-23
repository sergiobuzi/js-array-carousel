//creo la costante image e la stampo
const image = document.getElementsByClassName('img-container');
console.log(image);

//creo una flag e la imposto su 0
let activeItem = 0;

//configuro il bottone next per andare avanti
const next = document.querySelector('.bottom');

next.addEventListener('click',

    function(){

        if (activeItem < image.length - 1) {

            //tolgo la classe active all'immagine
            image[activeItem].classList.remove('active');

            //aumento l'indice dell'elemento da visualizzare
            activeItem++;

            //aggiungo la classe active all'elemento successivo
            image[activeItem].classList.add('active');

            
            //faccio il ciclo infito

            if (activeItem === image.length - 1){

                image[activeItem].classList.remove('active');

                activeItem = 0;

                image[activeItem].classList.add('active');

            }

        }

    }

);


//configuro il bottone back per andare indietro

const back = document.querySelector('.top');

back.addEventListener('click',

    function(){

        if (activeItem > 0) {

            //tolgo la classe active dall'immagine
            image[activeItem].classList.remove('active');

            //diminuisco l'indice dell'elemento da visualizzare
            activeItem--;

            //aggiungo la classe active all'elemento successivo
            image[activeItem].classList.add('active');

            
            //faccio il ciclo infito

            if (activeItem === 0){

                image[activeItem].classList.remove('active');

                activeItem = image.length - 1;

                image[activeItem].classList.add('active');

            }
            
        }

    }
    
);