function login() {
    let username = document.getElementById("Name").value;
    let password = document.getElementById("Password").value;
    fetch("https://fast-bayou-16865.herokuapp.com/login/", {
      method: "PATCH",
      body: JSON.stringify({
        username: username,
        password: password,
    }),
  
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
          console.log(json.data);
          if (json.data.length == 0) {
              alert("Incorrect information")
          }
          else{
              localStorage.setItem('user', JSON.stringify(json.data));
              window.location = './index.html'
          }
      });
}
