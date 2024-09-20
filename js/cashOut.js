

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('cash-out-amount-field');
    const pinNumber = getInputFieldValueById('cash-out-pin-field');
    console.log(cashOut, pinNumber);

    // Simple Validation Check
    if(isNaN(cashOut)){
        alert("Failed to add money");
    }

    if(pinNumber === 1234){
        let mainBalance = getTextFieldValueId('main-balance');

        // Cash out Value must be lowest of main balance
        if(cashOut > mainBalance){
            alert("You do not have enough money to cash out");
            return;
        }

        mainBalance -= cashOut;
        document.getElementById('main-balance').innerText = mainBalance;

        // add transaction history
        const rows = document.createElement('tr');
        rows.innerHTML = `
            <td>Cash Out</td>
            <td>$${cashOut}</td>
            <td>$${mainBalance}</td>
        `;
        document.getElementById('transaction-history').appendChild(rows);

        // Input Field Reset
        document.getElementById('cash-out-amount-field').value = "";
        document.getElementById('cash-out-pin-field').value = "";
    }
    else{
        alert("Pin didn't match. Please try again!");
    }
})