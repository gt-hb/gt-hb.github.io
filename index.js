//document.getElementById("demo").innerHTML = "Hello JavaScript!";

const start = async function() {
    const scriptUrl = "https://raw.githubusercontent.com/gt-hb/helloworld/test.csv";
    let req = new Request(scriptUrl);
    req.allowInsecureRequest = true;
    let response = await req.loadString();
    document.getElementById("demo").innerHTML = response;
}

start();
