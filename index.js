const proteinValue = document.getElementById("protein-value");
const proteinOutput = document.getElementById("protein-output");
const kcalFromProteinValue = document.getElementById("kcal-from-protein-value");
const npcOutput = document.getElementById("npc-output");
const npcValueCarbohydrate = document.getElementById("npc-value-carbohydrate");
const carbohydrateReniOuput = document.getElementById(
  "carbohydrate-reni-output"
);
const npcValueFat = document.getElementById("npc-value-fat");
const fatOutput = document.getElementById("fat-reni-output");
const amountPerServing = document.getElementById("amount-per-serving");
const reniValue = document.getElementById("reni-value");
const reniOutput = document.getElementById("reni-output");
const clearAllBtn = document.getElementById("clear-all-btn");

// Set to global to be accessed by other functions
let proteinKcal;

// Computes the Kcal from protein value
proteinValue.oninput = () => {
  let proteinKcal = parseFloat(proteinValue.value) * 4;
  proteinOutput.value = parseFloat(proteinKcal.toFixed(2));
};

// Computes the NPC value
kcalFromProteinValue.oninput = () => {
  let energyKcal = parseFloat(kcalFromProteinValue.value) - proteinOutput.value;
  npcOutput.value = parseFloat(energyKcal.toFixed(2));
};

// Computes the RENI for CHO
npcValueCarbohydrate.oninput = () => {
  let choReni = (parseFloat(npcValueCarbohydrate.value) * 0.7) / 4;
  carbohydrateReniOuput.value = parseFloat(choReni.toFixed(2));
};

// Computes the RENI for Fat
npcValueFat.oninput = () => {
  let fatReni = (parseFloat(npcValueFat.value) * 0.3) / 9;
  fatOutput.value = parseFloat(fatReni.toFixed(2));
};

// Percent RENI per serving
const updateReniOutput = () => {
  const amount = parseFloat(amountPerServing.value);
  const reni = parseFloat(reniValue.value);
  if (isNaN(amount) || isNaN(reni)) {
    reniOutput.value = "";
    return;
  }
  const percentReni = (amount / reni) * 100;
  reniOutput.value = percentReni.toFixed(2);
};

// Enabling/Disabling the input
reniValue.addEventListener("input", updateReniOutput);
amountPerServing.addEventListener("input", () => {
  updateReniOutput();
  if (amountPerServing.value.trim().length > 0) {
    reniValue.disabled = false;
    reniOutput.disabled = false;
  } else {
    reniValue.disabled = true;
    reniOutput.disabled = true;
  }
});

// Clear All Button
clearAllBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    input.value = "";
  }
});
