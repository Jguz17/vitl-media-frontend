document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#form-name').value
    const phone = document.querySelector('#form-phone').value
    const email = document.querySelector('#form-email').value
    const source = 'landing-page-1'

    let phoneCheckbox;
    let emailCheckbox;

    if (document.getElementById('phone').checked) {
        phoneCheckbox = 'true';
    } else {
        phoneCheckbox = 'false'
    }

    if (document.getElementById('email').checked) {
        emailCheckbox = 'true'
    } else {
        emailCheckbox = 'false'
    }

    const formObj = { name, phone, email, phoneCheckbox, emailCheckbox, source }

    fetch('https://vitl-media-form-data.herokuapp.com/landing_pages', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObj)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))

    location.replace('../../pages/thank-you-1.html')
})