let nameError = document.getElementById('name-error');

function validateName() {
    let name = document.getElementById('name-real');
    if (name.length = 0) {
        nameError.innerHTML = 'Name is required!';
        return false
    }
    if (!name.match(/^[A-Za-z])*\s{1}[A-Za-z]*&/)) {
        nameError.innerHTML = 'Write full name!';
        return false
    }
    nameError.innerHTML = 'valid'
}
