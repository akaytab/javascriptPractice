


document.addEventListener('DOMContentLoaded', function () {
    const btnElement = document.querySelector('.btn');
    if (btnElement) {
        btnElement.addEventListener('click', function () {
            console.log(document.querySelector('.search-field').value);
        });
    } else {
        console.error('Element with class ".btn" not found.');
    }
});
