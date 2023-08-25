fetch(https://dummyjson.com/users)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;
    })