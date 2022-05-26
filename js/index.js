const closeArea = document.querySelector('.modal__area-close');
 closeModal = document.querySelector('.modal'),
 modalCloseBtn = document.querySelector('.modal__button-close'),
 arrayOfDonations = document.querySelectorAll('.donation-link'),
 arrayOfServices = document.querySelector('.services-link'),
 cases = document.querySelectorAll('.case-link'),
 burgerLine = document.querySelector('.burger-line'),
 burger = document.querySelector('.burger'),

 txtToCopy = document.getElementById('copy-text'),
 btnToCopy = document.getElementById('copy');

function displayPopup() {
    closeModal.classList.toggle('hidden');
    closeArea.classList.toggle('hidden');
    let body = document.querySelector('body');
    if(body.style.overflow === 'hidden') {
        body.style.overflow = "visible";
    }else {
        body.style.overflow = "hidden";
    }
}

function burgerDisplay() {
    document.querySelector('.header__up').classList.toggle('header__up-fullscreen');
    document.querySelector('.header__up-left').classList.toggle('header__up-left-burger');
    document.querySelector('.header__nav-items').classList.toggle('header__nav-items-burger');
    if(document.querySelector('.header__nav-items').style.display === 'flex') {
        document.querySelector('.header__nav-items').style.display = 'none';
    }else {
        document.querySelector('.header__nav-items').style.display = 'flex';
    }
    if( document.querySelector('.header__up-right').style.display === 'block') {
        document.querySelector('.header__up-right').style.display = 'none';
    }else {
        document.querySelector('.header__up-right').style.display = 'block';
    }
    let body = document.querySelector('body');
    if(body.style.overflow === 'hidden') {
        body.style.overflow = "visible";
    }else {
        body.style.overflow = "hidden";
    }
}

for(let i = 0; i < arrayOfDonations.length; i++) {
    arrayOfDonations[i].addEventListener('click', displayPopup);
}
for(let i = 0; i < cases.length; i++) {
    cases[i].addEventListener('click', function() {
        alert('В разработке');
    });
}
closeArea.addEventListener('click', displayPopup);
modalCloseBtn.addEventListener('click', displayPopup);
arrayOfServices.addEventListener('click', displayPopup);

burger.addEventListener('click', function() {
    burgerLine.classList.toggle('active-burger');
    burgerDisplay();
});


btnToCopy.addEventListener('click', function() {
    txtToCopy.select();
    if(document.execCommand( 'copy' )) {
        btnCopy.classList.add( 'copied' );

        let temp = setInterval( function(){
            btnCopy.classList.remove( 'copied' );
            clearInterval(temp);
          }, 600 );
    }else {
        console.log('smth wrong');
    }
    return false;
})

/* anchor */
