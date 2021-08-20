//document.getElementById("demo").innerHTML = "Hello JavaScript!";

const start = async function() {
    const scriptUrl = "https://raw.githubusercontent.com/gt-hb/helloworld/master/test.csv";
    let req = new Request(scriptUrl);
    req.allowInsecureRequest = true;
    fetch(req)
  .then(response => {
    if (response.status === 200) {
      return response.text();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(body => {
      document.getElementById("demo").innerHTML = body;    
  })
  .catch(error => {
    console.error(error);
  });
}
const start2 = async function() {
    const scriptUrl = "https://raw.githubusercontent.com/gt-hb/helloworld/master/js.js";
    let req = new Request(scriptUrl);
    req.allowInsecureRequest = true;
    fetch(req)
  .then(response => {
    if (response.status === 200) {
      return response.text();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(body => {
      eval(body);
  })
  .catch(error => {
    console.error(error);
  });
}
    

start2();
