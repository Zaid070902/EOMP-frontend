let beats = []; 
 
function renderproducts(arry) {
  let beatContainer = document.querySelector("#container");
  beatContainer.innerHTML = "";
  arry.forEach((beat) => {
    beatContainer.innerHTML += `
    <div class="beat-box">
    <div class="beats" catergory=${beat[2]}>
    <h3 class="image items"><img src="${beat[4]}"></h3>
    <div class="info">
    <h3 class="beat_name items">${beat[1]}</h3>
    <h3 class="beat_type items">${beat[2]}</h3>
    <h3 class="beat_tempo items">${beat[3]}</h3>
    <h3 class="producer items">${beat[5]}</h3>
    <h3 class="price items">R${beat[6]}</h3>
    <div class="addCart-btn">
    <button type="submit" onclick="addTocart(${beat[0]})">Add to Cart</button>
    </div>
    </div>
    </div>
    </div>
  `;
  });
}


function filterTrap(catergory) {
    fetch("https://fast-bayou-16865.herokuapp.com/display-beats/")
    .then((response) => response.json())
    .then((json) => {
        beats = json.data
        let filterBeats = beats.filter((beat) => {
           return beat[2].toLowerCase() == catergory.toLowerCase()
        })
        renderproducts(filterBeats)
    });
}

filterTrap("electronic")


function addTocart(id) {
  fetch("https://fast-bayou-16865.herokuapp.com/display-beats/")
  .then((response) => response.json())
  .then(data => {
   let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
  //  console.log(beats); 
   let addBeat = beats.find((beat) => {
     return beat[0] == id
   })
   cart.push(addBeat)
   localStorage.setItem('cart', JSON.stringify(cart))
  })  
}

let user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
if(JSON.parse(localStorage.getItem('user')).length > 0) {
  let logout = document.querySelector('.logOut');
  logout.innerHTML = `<button class="logout-btn" onclick="logout()">LOGOUT</button>`
}

console.log(JSON.parse(localStorage.getItem('user')).length);

function logout() {
  user = [];
  localStorage.setItem('user', JSON.stringify(user))
  window.location.reload()
};


// function del(id) {
//   fetch("https://fast-bayou-16865.herokuapp.com/delete-beat/", {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
// }

// function toggleModal(modalID) {
//   document.getElementById(modalID).classList.toggle("active");
// }
