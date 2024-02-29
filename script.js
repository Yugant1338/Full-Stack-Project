
let faq = document.querySelectorAll('.faq');
let plusbtn = document.querySelectorAll('span');
let expanded = document.querySelectorAll('.expanded');
let addedElements = []; // Store references to added elements

plusbtn.forEach((plus, index) => {
    plus.addEventListener('click', () => {
        let addExpanded;

        if (plus.innerText === '+') {
            plus.innerText = 'X';
            addExpanded = document.createElement('div');
            addExpanded.innerHTML = expanded[index].innerHTML;
            faq[index].after(addExpanded);
            addedElements[index] = addExpanded; // Store the reference
        }
        else if (plus.innerText === 'X' && addedElements[index]) {
            plus.innerText = '+';
            addedElements[index].remove(); // Use the stored reference to remove
        }
    });
});