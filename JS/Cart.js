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
  <div class="removeBtn">
  <button class="remove-btn" onclick="removeBeat(${beat[0]})">Remove</button>
  </div>
  </div>
  </div>
  </div>
`;
});

let amount = JSON.parse(localStorage.getItem('cart')).length;
let sumPrice = JSON.parse(localStorage.getItem('cart')).reduce((total, beat) => total + parseInt(beat[6]), 0);
document.querySelector('.total').innerHTML = `Amount of beats: ${amount}`;
document.querySelector('.sum').innerHTML = `Total price: R${sumPrice}`

function removeBeat(id) {
  let cart = []
  let beatsOver = cartbeats.filter(item => item[0] != id)
  localStorage.setItem('cart', JSON.stringify(beatsOver))
  window.location.reload()
}

function checkout() {
let out = JSON.parse(localStorage.getItem('cart')).length = []
localStorage.setItem('cart', JSON.stringify(out))
window.location.reload()
alert('Beats Checked out')
}
