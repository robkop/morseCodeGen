function morseCodeGen() {
  let word = document.getElementById('word').value.toLowerCase();
  let resultDiv = document.getElementById('result');
  let pattern = {
    a: ".-",
    b: "-..",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: ".--",
    y: "-.--",
    z: "-.--"
  };

  for (var i = 0; i < word.length; i++) {
    let x = word.charAt(i);
    let y = pattern[x];
    resultDiv.innerHTML += x + " " + y + "<br>";
  }
}
document.getElementById('word').addEventListener("change",morseCodeGen);
