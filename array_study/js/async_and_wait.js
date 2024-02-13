
run();

async function run() {
  const num1 = await print1();
  const num2 = await print2();
  // num1.then((num) => {
  //   console.log(num);
  // });
  console.log(num1);
  console.log(num2);
}

async function print1() {
  console.log("1번출력");
  return "1번";
}

async function print2() {
  console.log("2번출력");
  return "2번";
}