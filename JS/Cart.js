// function addTocart(id) {
//     fetch("https://fast-bayou-16865.herokuapp.com/display-beats/")
//     .then((response) => response.json())
//     .then(data => {
//      let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
//     //  console.log(beats); 
//      let addBeat = beats.find((beat) => {
//        return beat[0] == id
//      })
//      cart.push(addBeat)
//      localStorage.setItem('cart', JSON.stringify(cart))
//     })  
//   }
  

let cartbeats = []
cartbeats = JSON.parse(localStorage.getItem('cart'));
let theCart = document.querySelector('.beatside');
cartbeats.innerHTML = "";

cartbeats.forEach((beat) => {
  theCart.innerHTML +=`
  <div class="beatBox">
  <div class="products" catergory=${beat[2]}>
  <h3 class="image items"><img src="${beat[4]}"></h3>
  <div class="details">
  <h3 class="beat_name items">${beat[1]}</h3>
  <h3 class="price items">R${beat[6]}</h3>
  </div>
  </div>
  </div>
`;
});

let total = JSON.parse(localStorage.getItem('cart').length);
document.querySelector('.total').innerHTML = `Amount of beats: ${total}`;
