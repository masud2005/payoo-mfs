

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('amount-field')
    const pinNumber = getInputFieldValueById('pin-field')
    console.log(addMoney, pinNumber);

    // Simple Validation
    if(isNaN(addMoney)){
        alert('Failed to add money!');
        return;
    }

    if(pinNumber === 1234){

        // add money with main balance
        let mainBalance = getTextFieldValueId('main-balance');
        mainBalance += addMoney;
        document.getElementById("main-balance").innerText = mainBalance;

        // add transaction history
        const rows = document.createElement('tr');
        rows.innerHTML = `
            <td>Add Money</td>
            <td>$${addMoney}</td>
            <td>$${mainBalance}</td>
        `;
        document.getElementById('transaction-history').appendChild(rows);

        // Input Field Reset
        document.getElementById("amount-field").value = "";
        document.getElementById("pin-field").value = "";
    }
    else{
        alert("Pin didn't match. Please try again")
    }
})