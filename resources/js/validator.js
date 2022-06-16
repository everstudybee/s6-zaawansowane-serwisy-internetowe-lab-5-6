function initializeValidatorRequired () {
    const elements = document.querySelectorAll('.validator-required');
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).addEventListener('focusout', validateRequired);
    }
}

function validateRequired (event) {
    // warunek wyświetla alert, gdy opuszczamy input, który jest pusty
    const helper = document.querySelector(`#${event.target.id}-helper`);
    if(!event.target.value) {
        helper.setAttribute('data-error', 'To pole jest wymagane');
        event.target.classList.add('invalid');
    } else{
        helper.setAttribute('data-success', 'Poprawnie');
        event.target.classList.add('valid');
    }
}

initializeValidatorRequired();
