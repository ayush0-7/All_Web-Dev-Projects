const heightInput = document.getElementById('heightInput');
let heightValue;
heightInput.addEventListener('input', () => {
    heightValue = heightInput.value;
});

const weightInput = document.querySelector('#weightInput');
let weightValue;
weightInput.addEventListener('input', () => {
    weightValue = weightInput.value;
})




const button = document.querySelector('#btn');
const result = document.querySelector('#result');

const under = document.querySelector('#under');
const normal = document.querySelector('#normal');
const over = document.querySelector('#over');

button.addEventListener('click', () => {
    const bmi = weightValue / Math.pow((heightValue / 100), 2);
    result.innerHTML = `BMI : ${bmi.toFixed(2)}`;
    if (bmi < 18.6) {
        under.style.background = 'green';
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        normal.style.background = 'green';
    }
    else{
        over.style.background = 'green';
    }
})

const resetBtn = document.getElementById('resetBtn');

  resetBtn.addEventListener('click', () => {
    location.reload(); // reloads the entire page
  });