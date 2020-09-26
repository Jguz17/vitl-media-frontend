document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#form-name').value
    const phone = document.querySelector('#form-phone').value
    const email = document.querySelector('#form-email').value

    let phoneCheckbox;
    let emailCheckbox;

    if (document.getElementById('phone').checked) {
        phoneCheckbox = true;
    } else {
        phoneCheckbox = false
    }

    if (document.getElementById('email').checked) {
        emailCheckbox = true
    } else {
        emailCheckbox = false
    }

    const formObj = { name, phone, email, phoneCheckbox, emailCheckbox }

    console.log(formObj)

    // location.replace('../../pages/thank-you-1.html')
})