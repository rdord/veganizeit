function headingMouseOverHandler(e) {
    e.target.textContent = 'VEGANIT';
}
function headingMouseOutHandler(e) {
    e.target.textContent = 'VEGANYT';
}

document.addEventListener('DOMContentLoaded', function () {
    let headingWords = document.querySelectorAll('.vy-heading span');
    headingWords.forEach(word => word.addEventListener('mouseover', headingMouseOverHandler));
    headingWords.forEach(word => word.addEventListener('mouseout', headingMouseOutHandler));
});