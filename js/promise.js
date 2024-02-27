main();

function main() {

  console.log("구구단 외워와1");
  console.log("구구단 외워와2");
  console.log("구구단 외워와3");

}

function gugudan(time, name) {
  setTimeout(() => {
    console.log(`${name}: 다외웠어요!!!`);
  }, time * 1000)
}