function tabs(wrapNavigationSelector,tabsBtnSelector,tabsContentSelector, showClassName, hideClassName){
    let tabWrap = document.querySelector(wrapNavigationSelector),
        tab = document.querySelectorAll(tabsBtnSelector),
        tabContent = document.querySelectorAll(tabsContentSelector);
        show = showClassName || 'show',
        hide = hideClassName || 'hide';
    
    function hideTabContent(a){
        for(let i=a; i<tabContent.length;i++){
            tabContent[i].classList.remove(show);
            tabContent[i].classList.add(hide);
        }
    }
    hideTabContent(1);

    function showTabContent(b){
        if (tabContent[b].classList.contains(hide)){
            tabContent[b].classList.remove(hide);
            tabContent[b].classList.add(show);
        }
    }

    tabWrap.addEventListener('click', function(event){
        let target=event.target;
        if (target && target.matches(tabsBtnSelector)){
            for(let i=0; i<tab.length; i++){
                if (target==tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
};
