
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    //*** use normal way
    // const mobileFieldValue = document.getElementById('mobile-number').value;
    // const mobileFieldNumber = parseFloat(mobileFieldValue);
    // console.log(mobileFieldNumber);

    // const pinValue = document.getElementById('pin-number').value;
    // const pinNumber = parseFloat(pinValue);
    // console.log(typeof pinNumber);

    //*** use function calling
    const mobileNumber = getInputFieldValueById('mobile-number');
    const pinNumber = getInputFieldValueById('pin-number');
    console.log(mobileNumber, pinNumber);

    // apply condition
    if(mobileNumber === 5 && pinNumber === 1234){
        console.log('right ache');
        window.location.href = './home.html'
    }
    else{
        alert("Didn't match Mobile Number & Pin Number");
    }
})