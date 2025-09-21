let display = document.querySelector(".display");

function sendValue(val) {
    if(display.innerText === '0') {
        display.innerText = val;
    }
    else {
        display.innerText += val;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace(/÷/g,'/').replace(/×/g,'*'));
        
    } catch (e) {
        display.innerText = "Error";
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteItem() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    if(!isNaN(key) || ["+", "-", "*", "/", "(", ")", "."].includes(key)) {
        sendValue(key);
    }
    else if (key === "Enter") {
        e.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1) || "0";
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
})