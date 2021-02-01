// random pin generate
document.getElementById('pin-generate-btn').addEventListener('click', function () {
    const pin = document.getElementById('pin-input-field');
    const randomNumber = Math.random() * 10000 + "";
    const pinGenerate = randomNumber.split('.')[0];
    pin.value = pinGenerate;
});


//key button function
function pressKey(key) {
    const typedPin = document.getElementById('pin-type-field');
    const pin = typedPin.value + key;
    typedPin.value = pin;
}


// check pin is matched or not by submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    const pinCode = document.getElementById('pin-input-field');
    const typedPinCode = document.getElementById('pin-type-field');
    if (pinCode.value == "") {
        alert('there is no pin! Please, click on Generate Pin first');
        document.getElementById('matched-notify').style.display = 'none';
    }
    else if (pinCode.value == typedPinCode.value) {
        document.getElementById('matched-notify').style.display = 'block';
        document.getElementById('not-matched-notify').style.display = "none";
    }
    else{
        document.getElementById('not-matched-notify').style.display = "block";
        document.getElementById('matched-notify').style.display = 'none';
    }
});

// clear Pin
function clearPin(){
    const typedPinCode = document.getElementById('pin-type-field');
    typedPinCode.value = "";
}