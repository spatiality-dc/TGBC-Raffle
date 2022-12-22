var colors = [
  "E7484F",
  "F68B1D",
  "FCED00",
  "009E4F",
  "00AAC3",
  "732982",
  "E7484F"
];

var list,
  decidedName,
  randomizer,
  i = 0,
  j = 0;

function start() {
  list = $("#txtList").val().split("\n");
  list = list.filter((x) => x.trim() != "").sort();

  if (list.length < 1) return;

  for (k = 0; k < randomRange(50, 100); k++) {
    shuffleArray(list);
    decidedName = list[randomRange(0, list.length - 1)];
    console.log(list);
  }

  randomizer = setInterval(() => {
    if (i == list.length) {
      i = 0;
    }
    if (j == colors.length) {
      j = 0;
    }

    $("#divSelected")
      .text(list[i++])
      .css("color", `#${colors[j++]}`);
  }, 50);

  setTimeout(() => {
    clearInterval(randomizer);
    $("#divSelected").text(decidedName);
  }, 3000);
}

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function toggleList() {
  $(".wrapper").toggleClass("show");
}
