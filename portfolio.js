document.addEventListener('DOMContentLoaded', () => {
    const cases = document.querySelectorAll('.case');
    
    cases.forEach(caseElement => {
        caseElement.addEventListener('click', () => {
            alert(`Vous avez cliqué sur : ${caseElement.textContent}`);
        });
    });
});