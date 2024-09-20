

// Add Money or Cash Out Money

// Input Field
function getInputFieldValueById(id){
    const inputFieldValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputFieldValue);
    return inputNumber;
}

// Main Balance
function getTextFieldValueId(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


// Show Section 
function showSectionById(id){
    // Hide all sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');

    // Show section with id as parameter
    document.getElementById(id).classList.remove('hidden');
}
