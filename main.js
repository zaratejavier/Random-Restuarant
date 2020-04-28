window.addEventListener("load", listen);

var images = new Array(
  'images/mcdonalds.jpg',
  'images/burgerKing.png',
  'images/betos.png',
  'images/buffalo.png',
  'images/cafeRio.jpg',
  'images/chickFila.jpg',
  'images/costaVida.png',
  'images/littleCaesars.png',
  'images/panda.png',
  'images/pizzahut.png',
  'images/zupas.jpg'
)

var theResult = document.getElementById('results');


function listen() {
  document.getElementById("random").addEventListener("click", randomPicture)
  document.getElementById("random").addEventListener("click",randomPicture2)
}

function randomPicture() {
  for (let i = 0; i < 10; i++) [
    setTimeout(() => {
      const randomPic = images[Math.floor(Math.random() * images.length)];
      document.getElementById("photo").src = randomPic
    }, 50 * i)
  ]
}

function randomPicture2() {
  for (let i = 0; i < 10; i++) [
    setTimeout(() => {
      const randomPic = images[Math.floor(Math.random() * images.length)];
      document.getElementById("photo2").src = randomPic
    }, 50 * i)
  ]
}

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 32:
      randomPicture() // space button
      // randomPicture2()
      break;
  }
}

// function displayCounts() {
//  if(randomPicture() === randomPicture2()){
//     console.log(
//       "Thats where youre going"
//     )
//   }
//     else{
//       console.log("wrong")
//     }
//   }

//   displayCounts()

