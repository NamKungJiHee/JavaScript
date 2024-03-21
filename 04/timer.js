// 방법 1

function greeting() {
  console.log("안녕하세요?");
}

setInterval(greeting, 2000);

/////////////////////////////////

// 방법 2
setInterval(() => {
  console.log("안녕하세요?")
}, 2000);