// const container = document.querySelector('.container');
// const seats = document.querySelectorAll('.row .seat:not(.occupied');
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');


function name(){
  var closeIcon = document.getElementsByClassName("container");
  for (var i = 0; i < closeIcon.length; i++) {
    closeIcon[i].addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');
    }})
  
  };
}

function countSelected(){
  // var numItems = $('.seat selected').length;
  var numItems = document.getElementsByClassName("seat selected").length
  document.getElementById("count").innerHTML = numItems-1;
  console.log(numItems) ;
}

function getSeatNos(){
  for (let i = 0; i < cars.length; i++){
    var text = document.getElementsByClassName("selected")[i].innerHTML; 
    
    console.log(text) 
  }


}



// populateUI();
// let ticketPrice = +movieSelect.value;

// // Save selected movie index and price
// function setMovieData(movieIndex, moviePrice) {
//   localStorage.setItem('selectedMovieIndex', movieIndex);
//   localStorage.setItem('selectedMoviePrice', moviePrice);
// }

// // update total and count
// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll('.row .seat.selected');

//   const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

//   localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

//   //copy selected seats into arr
//   // map through array
//   //return new array of indexes

//   const selectedSeatsCount = selectedSeats.length;

//   count.innerText = selectedSeatsCount;
//   total.innerText = selectedSeatsCount * ticketPrice;
// }

// // get data from localstorage and populate ui
// function populateUI() {
//   const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add('selected');
//       }
//     });
//   }

//   const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

//   if (selectedMovieIndex !== null) {
//     movieSelect.selectedIndex = selectedMovieIndex;
//   }
// }

// // Movie select event
// movieSelect.addEventListener('change', (e) => {
//   ticketPrice = +e.target.value;
//   setMovieData(e.target.selectedIndex, e.target.value);
//   updateSelectedCount();
// });



// // intial count and total
// updateSelectedCount();