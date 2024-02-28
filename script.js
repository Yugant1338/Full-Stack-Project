let plusBtns = document.querySelectorAll('.faq span');
let expandedTexts = document.querySelectorAll('.faq .expanded');
plusBtns.forEach((plus, index) => {
    plus.addEventListener('click', () => {
        if(expandedTexts[index].style.visibility==="hidden"){
            expandedTexts[index].style.visibility = 'visible';
        }
        else{
            expandedTexts[index].style.visibility = 'hidden';
        }

    });
});
