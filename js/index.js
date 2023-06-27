function calcHypo(a, b) {
  return Math.sqrt(a * a + b * b);
}

document.getElementById("result").style.display = "none";

document.getElementById("submit").onclick = () => {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  document.getElementById("result").style.display = "block";
  if (document.getElementById("precise").checked) {
    document.getElementById("result").innerText = `النتيجة : ${calcHypo(a, b)}`;
  } else {
    document.getElementById("result").innerText = `النتيجة: ${Math.floor(
      calcHypo(a, b)
    )}`;
  }
};
