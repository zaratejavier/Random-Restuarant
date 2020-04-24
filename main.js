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

function listen(){
  document.getElementById("random").addEventListener("click",randomPicture)
}

function randomPicture(){
  for (let i = 0; i < 10; i++) [
    setTimeout(() => {
      const randomPic = images[Math.floor(Math.random() * images.length)];
      document.getElementById("photo").src = randomPic
    }, 50 * i )
  ]
}
