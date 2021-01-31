// random pin generate
document.getElementById('pin-generate-btn').addEventListener('click', function(){
    const pin = document.getElementById('pin-input-field');
    const randomNumber = Math.random() * 10000 + "";
    const pinGenerate = randomNumber.split('.')[0];
    pin.value = pinGenerate;
});


//key button function
function pressKey(key){
    const typedPin = document.getElementById('pin-type-field');
    const pin = typedPin.value + key;
    typedPin.value = pin;
}