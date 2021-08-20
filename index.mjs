async function start(){
  //const { foo } = await import("./mjs.mjs");
  const { foo } = import("https://raw.githubusercontent.com/gt-hb/helloworld/master/mjs.mjs");
  foo();
}

start();
