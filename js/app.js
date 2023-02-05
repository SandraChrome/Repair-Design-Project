const tabsBtn = document.querySelectorAll('.tabs-projects__btn');
const tabsItems = document.querySelectorAll('.tabs-projects__item');


tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;

        let tabId = currentBtn.getAttribute("data-tab");

        let currenTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {  
        tabsBtn.forEach(function(item) { 
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item) {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        
        currenTab.classList.add('active');
        };
    });
});

document.querySelector('.tabs-projects__btn').click();