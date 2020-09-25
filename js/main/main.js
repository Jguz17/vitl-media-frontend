document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#form_name').value
    const email = document.querySelector('#form_email').value
    const phone = document.querySelector('#form_phone').value
    const message = document.querySelector('#form_message').value
    const source = 'main-page'

    const formObj = { name, email, phone, message, source }

    fetch('https://vitl-media-form-data.herokuapp.com/form_data', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObj)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))

    e.target.reset()
})