//document.getElementById("demo").innerHTML = "Hello JavaScript!";

const start = async function() {
    const scriptUrl = "https://raw.githubusercontent.com/gt-hb/helloworld/master/test.csv";
    let req = new Request(scriptUrl);
    req.allowInsecureRequest = true;
    fetch(req)
  .then(response => {
    if (response.status === 200) {
      let body = response.json();
      document.getElementById("demo").innerHTML = body;
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .catch(error => {
    console.error(error);
  });
}
    

start();
