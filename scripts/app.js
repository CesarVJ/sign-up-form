let btnClaim = document.getElementById('btn-claim');
let messageErrors = document.getElementsByClassName('message-validation');
let inputs = document.getElementsByClassName('data-form');
let icons = document.getElementsByClassName('error-icon');
//console.log(messageErrors);
btnClaim.addEventListener('click', (event) => {
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].oninvalid = function(e) {
            e.target.setCustomValidity('');
            if (!e.target.validity.valid) {
                messageErrors[i].style.display = 'block';
                icons[i].style.visibility = 'visible';
            }
        }
        inputs[i].oninput = function(e) {
            e.target.setCustomValidity('');
        };


    }

    //e.target.validity.valid

});