window.onload = function() {
    window.alert(`This is a demonstrative application only.
Data entered is not saved or stored in any way whatsoever.
Regardless, in the interest of safety and privacy, I kindly request that visitors do not enter any existing passwords that they may have.

Please be wary of your interactions on the internet. In the age of information, your personal information is sought after by malicious and fraudulent actors. Do what you can to keep your private data private.

    Thank you.`)
}
const password = document.querySelector('#password');
const icon = document.querySelector('#icon');

icon.onclick = function() {
    if(password.type === 'password'){
        password.type = 'text';
        icon.src = './assets/images/eye-open.png';
    } else {
        password.type = 'password';
        icon.src = './assets/images/eye-close.png';
    }
}
