function initializeValidatorRequired () {
    const elements = document.querySelectorAll('.validator-required');
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).addEventListener('focusout', validateRequired);
    }
}

function validateRequired (event) {
    alert('Opuściłeś pole');
}
