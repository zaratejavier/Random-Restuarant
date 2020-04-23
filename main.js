window.addEventListener("load", listen);

var images = new Array(
  'images/mcdonalds.jpg',
  'images/burgerKing.png',
  'images/betos.png',
  'images/buffalo.png',
  'images/cafeRio.png',  
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