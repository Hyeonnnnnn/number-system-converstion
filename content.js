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
  var select1 = document.getElementById('select1').value;
  var select2 = document.getElementById('select2').value;
  var inputNum = document.getElementById('inputNum').value;

  if (select1 === select2) {
    document.getElementById('convertedResult').value = inputNum;
  } else {
    var result;

    switch (select1) {
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

    switch (select2) {
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

function updatePattern() {
  var select1 = document.getElementById('select1').value;
  var pattern;

  switch (select1) {
    case '1': // Binary
      pattern = /^[01]+$/;
      break;
    case '2': // Decimal
      pattern = /^\d+$/;
      break;
    case '3': // Octal
      pattern = /^[0-7]+$/;
      break;
    case '4': // Hexadecimal
      pattern = /^[0-9A-Fa-f]+$/;
      break;
  }

  document.getElementById('inputNum').pattern = pattern;
}