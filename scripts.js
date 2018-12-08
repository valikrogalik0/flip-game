const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if ( lockBoard ) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
 
  if ( this == firstCard) return
  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
 
function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    return;
   }
 
   unflipCards();
  }
 
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }
 
  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1000);
  }

  (function snuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      console.log(card, '-----------', randomPos)
      card.style.order = randomPos;
    })
  })()

  cards.forEach(card => card.addEventListener('click', flipCard));

 