const cards = document.querySelectorAll('.card');
let hasFlipedCard = false;
let firstCard, secondCard;
let lockBoard = false;


function flipCard(){

    if(lockBoard) return;
    if(this === firstCard) return;


    this.classList.toggle('flip');
        if(!hasFlipedCard){
            hasFlipedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        hasFlipedCard = false;
        checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener.remove('flip');
    secondCard.removeEventListener.remove('flip');

}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();

    }, 1200);
}

function resetBoard() {
    [firstCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})