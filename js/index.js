function calcHypo(a, b) {
  return Math.sqrt(a * a + b * b);
}

document.getElementById("result").style.visibility = "hidden";

document.getElementById("submit").onclick = () => {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  document.getElementById("result").style.visibility = "visible";
  document.getElementById("result").innerText = `النتيجة: ${Math.floor(
    calcHypo(a, b)
  )}`;
};
