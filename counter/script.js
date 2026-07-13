let counter = document.getElementById("counterValue");

function onIncrement(){
    let previousValue = counter.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    counter.textContent = updatedValue;
}

function onDecrement(){
    let previousValue = counter.textContent;
    let updatedValue = parseInt(previousValue) - 1;
    counter.textContent = updatedValue;
}

function onReset(){
    counter.textContent = 0;
}
