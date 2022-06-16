function initializeValidatorRequired () {
    const elements = document.querySelectorAll('.validator-required');
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).addEventListener('focusout', validateRequired);
    }
}

function validateRequired (event) {
    // warunek wyświetla alert, gdy opuszczamy input, który jest pusty
    if(!event.target.value) {
        alert('Opuściłeś pole');
    }
}

initializeValidatorRequired();
