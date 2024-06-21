
const display = document.getElementById('display');


function appendValue(value) {
    display.value += value;
}


function calculate() {
    try {
        display.value = eval(display.value); //  inquestions
    } catch (error) {
        display.value = 'Error';
    }
}

// clear display
function clearDisplay() {
    display.value = '';
}

// handle button clicks
function buttonClick(event) {
    const value = event.target.innerText;
    if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        calculate();
    } else {
        appendValue(value);
    }
}




function clearMemory() {
    memory = 0; // Reset memory to 0
    clearDisplay = true; 
  }
  
  function appendValue(value) {
    if (clearDisplay) {
      display.value = ''; 
      clearDisplay = false; 
    }
    display.value += value;
  }
  
  function calculate() {
    
    display.value = eval(display.value); 
    clearMemory(); 
  }



  function clearAll() {
    display.value = ''; 
    clearDisplay = false; 
  }



document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', buttonClick);
});