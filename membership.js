
const joinForm = document.getElementById("joinForm");
const formToast = document.getElementById("formToast");

joinForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  formToast?.classList.remove("hidden");
  joinForm.reset();
  window.setTimeout(() => formToast?.classList.add("hidden"), 4500);
});

// ---------- BMI calculator: height (cm) + weight (kg) → BMI + category ----------
const bmiBtn = document.getElementById("bmiBtn");
const bmiH = document.getElementById("bmiHeight");
const bmiW = document.getElementById("bmiWeight");
const bmiResult = document.getElementById("bmiResult");

function bmiCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

bmiBtn?.addEventListener("click", () => {
  const h = Number(bmiH?.value);
  const w = Number(bmiW?.value);
  if (!h || !w) {
    bmiResult.textContent = "Enter height & weight";
    return;
  }
  const m = h / 100;
  const bmi = w / (m * m);
  const rounded = Math.round(bmi * 10) / 10;
  bmiResult.textContent = `${rounded} (${bmiCategory(rounded)})`;
});

