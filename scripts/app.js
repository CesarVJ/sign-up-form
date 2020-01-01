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
                e.preventDefault();
                icons[i].style.visibility = 'visible';
                messageErrors[i].style.display = 'block';
                if (i == 2) { //The email input
                    inputs[i].placeholder = 'email@example/com';
                    inputs[i].classList.add('email-error');
                } else {
                    inputs[i].placeholder = '';
                }
            }
        }
        inputs[i].oninput = function(e) {
            e.target.setCustomValidity('');
        };


    }

    //e.target.validity.valid

});