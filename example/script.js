function tabs(wrapNavigationSelector,tabsBtnSelector,tabsContentSelector, showClassName, hideClassName, activeClassName){
    let tabWrap = document.querySelector(wrapNavigationSelector),
        tab = document.querySelectorAll(tabsBtnSelector),
        tabContent = document.querySelectorAll(tabsContentSelector),
        show = showClassName || 'show',
        hide = hideClassName || 'hide',
        active = activeClassName || 'active';
    
        hideTabContent(1);
        activeTab(0);

    function hideTabContent(a){
        for(let i=a; i<tabContent.length;i++){
            tabContent[i].classList.remove(show);
            tabContent[i].classList.add(hide);
        }
    }

    function showTabContent(b){
        if (tabContent[b].classList.contains(hide)){
            tabContent[b].classList.remove(hide);
            tabContent[b].classList.add(show);
        }
    }

    function inactiveTabs(a){
        for(let i=a; i<tabContent.length;i++){
            tab[i].classList.remove(active);
        }
    }

    function activeTab(b){
        tab[b].classList.add(active);
    }

    tabWrap.addEventListener('click', function(event){
        let target=event.target;
        if (target && target.matches(tabsBtnSelector)){
            for(let i=0; i<tab.length; i++){
                if (target==tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    inactiveTabs(0);
                    activeTab(i);
                    break;
                }
            }
        }
    });
};

tabs('.wrapper','.tab','.content')
