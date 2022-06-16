// funkcja, która dodaje Event Listener do każdego przycisku z klasą validator-submit
function initializeValidatorSubmit () {
    const elements = document.querySelectorAll('.validator-submit');
    for (let i = 0; i < elements.length; i++) {
        elements.item(i)
            .addEventListener('submit', validateSubmit);
    }
}

// funkcja walidująca wywoływana za każdym razem, gdy klikniemy przycisk (submit)
function validateSubmit (event) {
    const helper = document.querySelectorAll('.invalid');
    if (helper.length > 0) {
        event.preventDefault();
    }
}

// funkcja, która dodaje Event Listener do każdego pola z klasą validator-required
function initializeValidatorRequired () {
    const elements = document.querySelectorAll('.validator-required');
    for (let i = 0; i < elements.length; i++) {
        elements.item(i)
            .addEventListener('focusout', validateRequired);
    }
}

// funkcja walidująca wywoływana za każdym razem, gdy opuszczamy pole (focusout)
function validateRequired (event) {
    // warunek wyświetla alert, gdy opuszczamy input, który jest pusty
    const helper = document.querySelector(`#${event.target.id}-helper`);
    if (!event.target.value) {
        helper.setAttribute('data-error', 'To pole jest wymagane');
        event.target.classList.add('invalid');
    } else {
        helper.setAttribute('data-success', 'Poprawnie');
        event.target.classList.add('valid');
    }
}

initializeValidatorRequired();
initializeValidatorSubmit();
