//document.getElementById("demo").innerHTML = "Hello JavaScript!";

const start = async function() {
    const scriptUrl = "https://raw.githubusercontent.com/gt-hb/helloworld/master/test.csv";
    let req = new Request(scriptUrl);
    req.allowInsecureRequest = true;
    fetch(req)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.debug(response);
    // ...
  }).catch(error => {
    console.error(error);
  });
    let response = await req.loadString();
    document.getElementById("demo").innerHTML = response;
}

start();
