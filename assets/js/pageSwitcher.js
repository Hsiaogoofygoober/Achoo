let current_category = 0;
$(function () {
    //click tab
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    let current_page_id = 1;

    tab_switchers[0].classList.add('disabled-link');
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = $(tab_switcher).data('tab');

        tab_switcher.addEventListener('click', () => {

            document.querySelector('.pagination .active').classList.remove('active');
            tab_switcher.parentNode.classList.add('active');

            current_page_id = page_id;
            const tabs = document.querySelectorAll('.tabb')
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.add('not-active');
            }
            const tabsA = document.querySelectorAll('.tabb [data-switcher]');
            for (let j = 0; j < tabs.length; j++) {
                tabsA[j].classList.remove('disabled-link');
            }
            tab_switcher.classList.add('disabled-link');
            if (current_page_id === 1) {
                document.querySelector(`.tabb [data-tab="${current_page_id}"]`).parentNode.classList.remove('not-active');
                document.querySelector(`.tabb [data-tab="${current_page_id + 1}"]`).parentNode.classList.remove('not-active');
                document.querySelector(`.tabb [data-tab="${current_page_id + 2}"]`).parentNode.classList.remove('not-active');

            }
            else if (current_page_id === tab_switchers.length) {
                document.querySelector(`.tabb [data-tab="${current_page_id}"]`).parentNode.classList.remove('not-active');
                document.querySelector(`.tabb [data-tab="${current_page_id - 1}"]`).parentNode.classList.remove('not-active');
                document.querySelector(`.tabb [data-tab="${current_page_id - 2}"]`).parentNode.classList.remove('not-active');
            }
            else {
                document.querySelector(`.tabb [data-tab="${current_page_id - 1}"]`).parentNode.classList.remove('not-active');
                document.querySelector(`.tabb [data-tab="${current_page_id}"]`).parentNode.classList.remove('not-active');
                document.querySelector(`.tabb [data-tab="${current_page_id + 1}"]`).parentNode.classList.remove('not-active');
            }


            SwitchPage(current_category, page_id);
        })



    }
    //first tab
    const tab_first = document.querySelector('[data-first]');

    tab_first.addEventListener('click', () => {
        tab_switchers[0].classList.add('disabled-link');
        console.log("current id " + current_page_id);
        document.querySelector('.pagination .active').classList.remove('active');
        current_page_id = 1;
        const first_page_tab = document.querySelector(`.tabb [data-tab="${current_page_id}"]`)

        console.log(first_page_tab);
        first_page_tab.parentNode.classList.add('active');
        const tabs = document.querySelectorAll('.tabb');
        for (let j = 0; j < tabs.length; j++) {
            console.log(j);
            tabs[j].classList.add('not-active');
        }
        document.querySelector(`.tabb [data-tab="${current_page_id}"]`).parentNode.classList.remove('not-active');
        document.querySelector(`.tabb [data-tab="${current_page_id + 1}"]`).parentNode.classList.remove('not-active');
        document.querySelector(`.tabb [data-tab="${current_page_id + 2}"]`).parentNode.classList.remove('not-active');
        SwitchPage(current_category, current_page_id);

    })


    //last tab
    const tab_last = document.querySelector('[data-last]');

    tab_last.addEventListener('click', () => {
        tab_switchers[tab_switchers.length - 1].classList.add('disabled-link');
        document.querySelector('.pagination .active').classList.remove('active');
        current_page_id = tab_switchers.length;
        const last_page_tab = document.querySelector(`.tabb [data-tab="${current_page_id}"]`)

        console.log(last_page_tab);
        last_page_tab.parentNode.classList.add('active');
        const tabs = document.querySelectorAll('.tabb');
        for (let j = 0; j < tabs.length; j++) {
            console.log(j);
            tabs[j].classList.add('not-active');
        }
        console.log("current id " + current_page_id);
        document.querySelector(`.tabb [data-tab="${current_page_id}"]`).parentNode.classList.remove('not-active');
        document.querySelector(`.tabb [data-tab="${current_page_id - 1}"]`).parentNode.classList.remove('not-active');
        document.querySelector(`.tabb [data-tab="${current_page_id - 2}"]`).parentNode.classList.remove('not-active');
        SwitchPage(current_category, current_page_id);

    })

    ControlCategoryChange(tab_switchers[0]);


});

function SwitchPage(current_category, page_id) {
    const currentPage = document.querySelector(`.tabs-content[data-category="${current_category}"] .tab-content.is-active`);
    console.log(currentPage);
    console.log(current_category);
    currentPage.classList.remove('is-active');

    const nextPage = document.querySelector(`.tabs-content[data-category="${current_category}"] .tab-content[data-page="${page_id}"]`);
    console.log(nextPage);
    nextPage.classList.add('is-active');
}

/* Demo purposes only */
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);

//show category tab active and correspond category contents
function ControlCategoryChange(firstTab) {
    const tabs = document.querySelectorAll('.shows-events-tabs .heading-tabs li');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('ui-tabs-active');
            }
            tabs[i].classList.add('ui-tabs-active');

            //add not-active to all category content
            for (let j = 0; j < tabs.length; j++) {
                document.querySelector(`.tabs-content[data-category="${j}"]`).classList.add('not-active');
            }
            document.querySelector(`.tabs-content[data-category="${i}"]`).classList.remove('not-active');
            current_category = i;

            //reset page
            const tabsA = document.querySelectorAll('.tabb [data-switcher]');
            for (let j = 0; j < tabs.length; j++) {
                tabsA[j].classList.remove('disabled-link');
            }
            firstTab.classList.add('disabled-link');
            document.querySelector('.pagination .active').classList.remove('active');
            let current_page_id = 1;
            const first_page_tab = document.querySelector(`.tabb [data-tab="${current_page_id}"]`)

            console.log(first_page_tab);
            first_page_tab.parentNode.classList.add('active');
            const tabbs = document.querySelectorAll('.tabb');
            for (let j = 0; j < tabbs.length; j++) {
                console.log(j);
                tabbs[j].classList.add('not-active');
            }
            document.querySelector(`.tabb [data-tab="${current_page_id}"]`).parentNode.classList.remove('not-active');
            document.querySelector(`.tabb [data-tab="${current_page_id + 1}"]`).parentNode.classList.remove('not-active');
            document.querySelector(`.tabb [data-tab="${current_page_id + 2}"]`).parentNode.classList.remove('not-active');
            SwitchPage(current_category, current_page_id);
        })
    }
}

