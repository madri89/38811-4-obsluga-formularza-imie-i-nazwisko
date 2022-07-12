
let form = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault();

    let fisrtName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');

    console.log(`Imie: ${fisrtName.value}, Nazwikso: ${lastName.value}`);
}

form.addEventListener('submit',submitForm);