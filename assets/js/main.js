// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.



let images = [
    './assets/img/consegna/img/01.webp', //0 to 1
    './assets/img/consegna/img/02.webp', //1 to 2
    './assets/img/consegna/img/03.webp', //2 to 3
    './assets/img/consegna/img/04.webp', //3 to 4
    './assets/img/consegna/img/05.webp', //4 to 5
];

// seleziono le freccette
let arrowUp = document.querySelector('.arrowUp');
let arrowDown = document.querySelector('.arrowDown');

//setto la variabile indice
let index = 0;

let img = document.querySelector(".lamp");

//incremento
arrowDown.addEventListener('click', function() {

    //passo l'attributo src al img con il path dell'immagine nell'array
    img.setAttribute('src', images[index]);
    index++;

    if (index >= images.length) {
        index = 0;
    }
});

// decremento
arrowUp.addEventListener('click', function() {

    img.setAttribute('src', images[index]);
    index --;

    if (index < 0) {
        index = images.length - 1;
    }

    
});


///thumbnails


let thumbnails = document.querySelector('.thumbnails');

for (let i = 0; i < images.length; i++) {

    //creo l'elemento div con classe thumbnail
    let div = document.createElement('div');
    thumbnails.append(div);
    div.setAttribute('class', 'thumbnail');
    div.setAttribute('onclick', `changeImg(${i+1})`);
    console.log(div)

    //aggiungo l'immagine presa dall'array
    let imgThumb = document.createElement('img');
    imgThumb.setAttribute('src', images[i]);
    div.appendChild(imgThumb);
}

// cambio immagine al click

function changeImg(num){
    let change = `./assets/img/consegna/img/0`+ num +`.webp`;
    document.querySelector('.lamp').src = change;
}