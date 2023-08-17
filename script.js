'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsShow = document.querySelectorAll('.show');

console.log(btnsShow);

for (let n = 0; n < btnsShow.length; n++)

  btnsShow[n].addEventListener('click', function() {
   
    console.log('Clicked');

    modal.classList.remove('hidden');

    overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', function() {
    
    modal.classList.add('hidden');

    overlay.classList.add('hidden');
});

overlay.addEventListener('click', function() {
    
    modal.classList.add('hidden');

    overlay.classList.add('hidden');
});


modal.addEventListener('click', function() {
    
    modal.classList.add('hidden');

    overlay.classList.add('hidden');
});


document.addEventListener('keydown', function (h) {
    console.log(h.key);

    if(h.key === 'Escape') {
        
    }
});
