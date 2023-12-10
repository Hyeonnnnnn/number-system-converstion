const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

let previouslyDisabledOption1 = null;
let previouslyDisabledOption2 = null;

select1.addEventListener('change', (event) => {
  const selectedOption = event.target.value;

  const options = select2.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === selectedOption) {
      options[i].disabled = true;
      break;
    }
  }

  if (previouslyDisabledOption1 !== null) {
    previouslyDisabledOption1.disabled = false;
  }

  previouslyDisabledOption1 = select2.querySelector(`[value="${selectedOption}"]`);
});

select2.addEventListener('change', (event) => {
  const selectedOption = event.target.value;

  const options = select1.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === selectedOption) {
      options[i].disabled = true;
      break;
    }
  }

  if (previouslyDisabledOption2 !== null) {
    previouslyDisabledOption2.disabled = false;
  }

  previouslyDisabledOption2 = select1.querySelector(`[value="${selectedOption}"]`);
});

function convert() {
  const select1Value = select1.value;
  const select2Value = select2.value;
  const inputNum = document.getElementById('inputNum').value;

  const isValidInput =
    (select1Value === '1' && /^[01]+$/.test(inputNum)) ||
    (select1Value === '2' && /^\d+$/.test(inputNum)) ||
    (select1Value === '3' && /^[0-7]+$/.test(inputNum)) ||
    (select1Value === '4' && /^[0-9A-Fa-f]+$/.test(inputNum));

  if (!isValidInput) {
    document.getElementById('convertedResult').value = "NaN";
    return;
  }

  if (select1Value === select2Value) {
    document.getElementById('convertedResult').value = inputNum;
  } else {
    let result;

    switch (select1Value) {
      case '1': // Binary
        result = parseInt(inputNum, 2);
        break;
      case '2': // Decimal
        result = parseInt(inputNum, 10);
        break;
      case '3': // Octal
        result = parseInt(inputNum, 8);
        break;
      case '4': // Hexadecimal
        result = parseInt(inputNum, 16);
        break;
    }

    switch (select2Value) {
      case '1': // Binary
        result = result.toString(2);
        break;
      case '2': // Decimal
        result = result.toString(10);
        break;
      case '3': // Octal
        result = result.toString(8);
        break;
      case '4': // Hexadecimal
        result = result.toString(16).toUpperCase();
        break;
    }

    document.getElementById('convertedResult').value = result;
  }
}
