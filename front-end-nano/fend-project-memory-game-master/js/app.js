
// Global variables for keeping track the start time and how many moves were made
let moveCounter = 0;
let start_time = new Date();

// We flip a card by either adding or removing both "open" and "show" classes
function flipCard(card) {
	card.classList.toggle("open");
    card.classList.toggle("show");
}

// We mark a card by adding the match class.
function matchCard(element) {
	element.classList.toggle("match"); //keeps the matches openfaced
}

// Go through all cards and return the first one that is flipped over.
function firstFlippedCard(){
	let listOfCards = document.getElementsByClassName("card");
	for (let c of listOfCards) { 
		if (isCardFlipped(c) === true) {
			return c;
		}
	}
	// If no card is flipped over then we failed so we should not return a card
	return false;
}

// Go through all cards and return a count of how many are flipped up (not including matched ones)
function howManyCardsAreFlipped(){
	let listOfCards = document.getElementsByClassName("card");
	let numOfCardsFlipped = 0;
	for (let c of listOfCards) {
		if (isCardFlipped(c) === true) {
			numOfCardsFlipped += 1;
		}
	}
	return numOfCardsFlipped;
}

// Returns a boolean whether we have found all matches (finished the game)
// We assume that we're not done if any cards are not yet matched
function foundAllMatches(){
	let listOfCards = document.getElementsByClassName("card");
	for (let c of listOfCards) {
		if (!isCardMatched(c)) {
			return false;
		}
	}
	return true;
}

// Gets the classes that correspond to the symbol of cards. It also includes the first fa
function getSymbol(card){
	return card.getElementsByClassName("fa")[0].className;
}

// Is the specific card flipped over?
function isCardFlipped(card){
	return card.className === "card open show";
}

// Is the specific card matched?
function isCardMatched(card){
	return card.className === "card match";
}

// Increments the move counter and updates star rating
function updateMoveCounter(){
	moveCounter++;
	document.getElementsByClassName("moves")[0].innerHTML = moveCounter;

	if (moveCounter == 24) {
		let parent = document.getElementsByClassName("stars")[0];
		let child = parent.children[0];
		child.style.visibility = 'hidden';
	}
	if ( moveCounter == 32) {
		let parent = document.getElementsByClassName("stars")[0];
		let child = parent.children[1];
		child.style.visibility = 'hidden';
	}
	if (moveCounter == 48) {
		let parent = document.getElementsByClassName("stars")[0];
		let child = parent.children[2];
		child.style.visibility = 'hidden';
	}

}

// A large function that handles all events that need to happen when a card is clicked.
function cardClickHandler(card) {
	//So that the user can not click more than 2 cards at a time.
	if (howManyCardsAreFlipped() >= 2){
		return;
	}
	let past_flipped_card = firstFlippedCard();

	// Since this is the first click on a card, we always just flip it and exit.
	if (past_flipped_card === false) { 
		flipCard(card); // flip the card
		updateMoveCounter();
		return;
	}

	// If a card is flipped, this means the user is clicking on the same card twice	
	if (isCardFlipped(card)){
		return;
	}

	// Otherwise this is a fair second move
	flipCard(card);
	updateMoveCounter();

	// If they are the same symbol then i want the two flipped cards to remain flipped
	// Set both cards to the match class
	let second_symbol = getSymbol(card);
	let first_symbol = getSymbol(past_flipped_card);
	if (first_symbol === second_symbol){
		flipCard(past_flipped_card);
		flipCard(card);
		matchCard(past_flipped_card);
		matchCard(card);
		if (foundAllMatches()) {
			openModal();
		}
		return;
	}

	// Flip both cards back eventually because they're not a match
	setTimeout(function() {
		flipCard(past_flipped_card);
		flipCard(card);
	} ,500);
}

// Shuffles the deck of cards and initializes the timer.
function initBoard() {
	// Shuffle all cards
	let deck = document.querySelector('.deck');
	let children = shuffle(deck.children);
	for (let i of children) {
		deck.appendChild(i);
	}
	setTimer();
}

// This is the timer in the game. Get the current time and subtracts the start time to get sec and min.
function setTimer(){
	let current_time = new Date();
	let offset_time = current_time - start_time;
	document.getElementsByClassName("timer")[0].innerHTML = "Timer: " + parseInt(offset_time / 1000);

	if (!foundAllMatches()) {
		setTimeout(setTimer, 1000);
	}
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//This is my reset button so that players can flip all of the cards in a start postion and it shuffles the cards again.
function resetClickHandler(button){ 
	closeModal();
	let listOfCards = document.getElementsByClassName("card");
	for (let c of listOfCards){ // for loop to loop through all the cards
		if (isCardMatched(c) === true){
			matchCard(c);
		}
		if (isCardFlipped(c) === true){ // if the card if flipped
			flipCard(c);
		}
	}

	for (let parent of document.getElementsByClassName("stars")) {
		for (let child of parent.children) {
			child.style.visibility = '';
		}
	}
	start_time = new Date();
	moveCounter = -1;
	updateMoveCounter();
	initBoard();
}

// Opens and populates the end result of how the player did.
function openModal() {
	let modal = document.getElementsByClassName('modal')[0];
	modal.style.display = "block";
	document.getElementsByClassName('numMoves')[0].innerHTML = "It took you " + moveCounter + " moves!";
	let current_time = new Date();
	let offset_time = current_time - start_time;
	let minutes = parseInt(offset_time / 1000 / 60);
	let seconds = parseInt(offset_time / 1000) % 60;
	document.getElementsByClassName('timeTook')[0].innerHTML = "In  " + minutes + " minutes & " + seconds + " seconds.";

	if (moveCounter >= 24) {
		let parent = document.getElementsByClassName("stars")[1];
		let child = parent.children[0];
		child.style.visibility = 'hidden';
	}
	if ( moveCounter >= 32) {
		let parent = document.getElementsByClassName("stars")[1];
		let child = parent.children[1];
		child.style.visibility = 'hidden';
	}
	if (moveCounter >= 48) {
		let parent = document.getElementsByClassName("stars")[1];
		let child = parent.children[2];
		child.style.visibility = 'hidden';
	}

}

// Closes the results popup modal
function closeModal() {
	let modal = document.getElementsByClassName('modal')[0];
	modal.style.display = "none";
}

initBoard();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
