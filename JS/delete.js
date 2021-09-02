function del(id) {
    fetch(`https://thawing-shelf-98370.herokuapp.com/delete-post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
}
