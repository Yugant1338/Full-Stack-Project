let plusbtn = document.querySelectorAll('span');
let expandedtext = document.querySelectorAll('.expanded');
plusbtn.forEach((plus) => {
    plus.addEventListener('click', ()=>{
        expandedtext[0].style.visibility = 'visible';
    });
});

