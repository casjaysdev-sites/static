fetch("https://github.com/casjaysdev-sites/static/raw/main/README.md")
  .then(function (response) {
    return response.text();
  })
  .then(function (body) {
    console.log(res);
    document.body.innerHTML = res;
  });
