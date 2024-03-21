const prompt = require("prompt-sync")({sigint: true});
let score= prompt("프로그래밍 점수: ");

if (score != null) {
  if (parseInt(score) >= 90) {
    alert("A학점");
  } else if (parseInt(score) >= 80) {
    alert("B학점");
  } else {
    alert("C학점");
  }
}