//const card = document.querySelector('.card');
const cards = document.querySelectorAll('.card');


// cards.forEach(card=> {
//     card.addEventListener('mousemove',startRotate);
//     card.addEventListener('mouseout',stopRotate);
// });

//For All Browaer
for(let i = 0; i < cards.length; ++i){
    cards[i].addEventListener('mousemove',startRotate);
    cards[i].addEventListener('mouseout',stopRotate);
};

function startRotate(e){
    const cardItem = this.querySelector('.card-item');

    // cardItem.innerText = e.clientX;
    // cardItem.innerText = e.offsetX;
    //cardItem.innerText = e.offsetX+' '+e.offsetY;
    //console.log(cardItem.style);
    // cardItem.style.background = `#${e.offsetX}`
    //cardItem.style.transform = 'rotateX('+e.offsetY / 5+'deg)';
   const halfHeight = cardItem.offsetHeight / 2;
   const halfWidth = cardItem.offsetWidth / 2;
   cardItem.style.transform = 'rotateX('+ -(e.offsetY - halfHeight) / 5 + 'deg) rotateY('+ (e.offsetX - halfWidth) / 5 + 'deg)';


}

function stopRotate(){
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';

}