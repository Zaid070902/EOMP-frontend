function imageConverter() {
  const image = document.querySelector(".imageholder");
  const file = document.querySelector("#image").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      image.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

function addProduct() {
  let name = document.getElementById("beat_name").value;
  let type = document.getElementById("beat_type").value;
  let tempo = document.getElementById("beat_tempo").value;
  let images = document.querySelector(".imageholder").src;
  let producers = document.getElementById("producer").value;
  let prices = document.getElementById("price").value;
  console.log(name, type, tempo, images, producers, prices);
  fetch("http://127.0.0.1:5000/create-beat/", {
    method: 'POST',
    body: JSON.stringify({
      beat_name: name,
      beat_type: type,
      beat_tempo: tempo,
      image: images,
      producer: producers,
      price: prices,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
