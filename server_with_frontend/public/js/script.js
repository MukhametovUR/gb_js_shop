let headerMenuBtn = document.querySelector('.header__menu-btn'),
    headerNav = document.querySelector('.header__nav'),

    filterBtn = document.querySelector('.filter__main'),
    mainFilter = document.querySelector('.filter__nav'),

    subFilter = document.querySelectorAll('.filter__subitem'),
    showSubFilter = document.querySelector('.filter__subitem-nav');

headerMenuBtn.addEventListener('click', function() {
    headerNav.style.display == 'none'? headerNav.style.display = 'block': headerNav.style.display = 'none'; 
});

subFilter.forEach(btn =>{
    btn.addEventListener('click', function() {
            showSubFilter.style.display == 'none'? showSubFilter.style.display = 'block': showSubFilter .style.display = 'none'; 
    });
    
});

function showNavBlock(i) {
    i.style.display == 'none'? i.style.display = 'block': i .style.display = 'none'; 

}