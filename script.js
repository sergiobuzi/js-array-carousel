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


            if (activeItem === image.length - 1) {

                //arrivo all'ultima immagine
                next.classList.add('hidden');
            }

        }

    }

);


//configuro il bottone back per andare indietro

const back = document.querySelector('top');

back.addEventListener('click',

    function(){

        if (activeItem < image.lenght - 1) {

            //tolgo la classe active dall'immagine
            image[activeItem].classList.add('active');

            //aumento l'indice dell'elemento da visualizzare
            activeItem--;

            //aggiungo la classe active all'elemento successivo
            image[activeItem].classList.remove('active');


            if (activeItem === 0) {

                //arrivo all'ultima immagine
                back.classList.add('hidden');
            }
        }
    }
);