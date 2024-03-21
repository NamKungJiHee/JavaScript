const bttn = document.querySelector("button"); // 버튼 요소를 가져옴

function display() {
  alert("클릭");
}

bttn.addEventListener("click", display); // 버튼을 클릭하면 display함수 실행