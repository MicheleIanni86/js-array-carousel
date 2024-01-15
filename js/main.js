console.log('ok');
// HTML
const slideContainerElement = document.getElementById('slideContainer');
const arrowNextButton = document.querySelector('.arrow-next');
const arrowPrevButton = document.querySelector('.arrow-prev');



// creo array delle immagini
const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];


// immagine che mostro
let photoView = 0;

// genero Html
let immaginiHtml = '';

for (let i = 0; i < slides.length; i++) {

    // recupero ogni elemento
    const slide = slides[i];

    let attivaClass;
    if (i == photoView) {
        attivaClass = 'attiva';
    } else {
        attivaClass = '';
    }

    // genero posto dove mettere in Html
    immaginiHtml += `<img src="./img/${slide}" alt="" class="slide ${attivaClass}"/>`;


}

// slideContainerElement.innerHTML = immaginiHtml;

// Bottone next
arrowNextButton.addEventListener('click', function () {
    // togli
    const currentPhoto = document.querySelector('.slide.attiva');
    currentPhoto.classList.remove('attiva');

    photoView++;

    // metti
    const otherPhoto = document.getElementsByClassName('slide');
    const newPhoto = otherPhoto[photoView];
    newPhoto.classList.add('attiva');
});


// Bottone prev
arrowPrevButton.addEventListener('click', function () {


});