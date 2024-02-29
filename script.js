
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
            addExpanded.style.color = 'white';
            addExpanded.style.fontSize = '20px';
            addExpanded.style.height = '100px';
            addExpanded.style.textAlign = 'left';
            addExpanded.style.textIndent = '10px';
            addExpanded.style.backgroundColor = '#272829';
            addExpanded.style.display = 'flex';
            addExpanded.style.flex = '1';
            addExpanded.style.width = '1000px';
            addExpanded.style.alignItems = 'center';
            addExpanded.style.margin = 'auto';
            addExpanded.style.border = '0';

            faq[index].after(addExpanded);
            addedElements[index] = addExpanded; // Store the reference
        }
        else if (plus.innerText === 'X' && addedElements[index]) {
            plus.innerText = '+';
            addedElements[index].remove(); // Use the stored reference to remove
        }
    });
});