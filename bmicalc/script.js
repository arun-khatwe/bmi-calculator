document.getElementById('calculate-btn').addEventListener('click', function() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

  if (weight && height) {
    const bmi = (weight / (height * height)).toFixed(2);
    const bmiValue = document.getElementById('bmi-value');
    const bmiMessage = document.getElementById('bmi-message');

    bmiValue.textContent = bmi;

    let message = '';
    if (bmi < 18.5) {
      message = 'You are underweight.';
      bmiMessage.style.color = '#FFC107';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = 'You have a normal weight.';
      bmiMessage.style.color = '#28A745';
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = 'You are overweight.';
      bmiMessage.style.color = '#FF5722';
    } else {
      message = 'You are obese.';
      bmiMessage.style.color = '#DC3545';
    }

    bmiMessage.textContent = message;
  } else {
    alert('Please enter valid values for weight and height!');
  }
});
