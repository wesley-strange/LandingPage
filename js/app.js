/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**
 * @constructor build_nav 
 * @description Builds the navigation bar
 * @param {ul element} navbar_list
 * @param {DocumentFragment} navbar_fragment
 * @param {li element} navbar_item
 * Steps:
 * - select the navbar__list element that will contain the nav items
 * - select all of the sections that will be added to the navigation menu
 * - create new document fragment to build the navigation list in
 * - loop through all of the sections one at a time
 * --> create new list element
 * --> set value of list element to the section's data-nav value
 * --> append the new list element to the document fragment
 * - append the document fragment to the navbar__list element
*/
function build_nav() {
    const navbar_list = document.querySelector('#navbar__list');
    let navbar_fragment = new DocumentFragment();

    document.querySelectorAll('section').forEach(section => {
        let navbar_item = document.createElement('li');
        navbar_item.innerHTML = section.getAttribute('data-nav');
        navbar_item.classList.add('menu__link');
        navbar_fragment.appendChild(navbar_item);
    })

    navbar_list.appendChild(navbar_fragment);
}

/**
 * @constructor set_active_section_link
 * @description Add class 'your-active-class' to section when near top of viewport and also add class
 *              'active-link' to link when it is the active section
 * @param {number} navbar_height
 * @param {DOMRect} section_loc
 * @param {string} section_name
 * Steps:
 * - select all of the sections that will be added to the navigation menu
 * - store height of the navigation bar
 * - create new document fragment to build the navigation list in
 * - loop through all of the sections one at a time
 * --> get section location
 * --> IF determined that it is the active class add the active class name
 * --> ELSE remove the active class name
*/
function set_active_section_link() {
    const navbar_height = document.querySelector('header').getBoundingClientRect().height;
    document.querySelectorAll('section').forEach(section => {
        let section_loc = document.getElementById(section.getAttribute('id')).getBoundingClientRect();
        if ((section_loc.y < navbar_height) && ((section_loc.y + section_loc.height) > navbar_height)) {
            section.classList.add('your-active-class');
            const section_name = document.querySelector('.your-active-class').getAttribute('data-nav');
            document.querySelectorAll('.menu__link').forEach(link => {
                if (section_name == link.innerHTML) {
                    link.classList.add('active-link');
                } else {
                    link.classList.remove('active-link');
                }
            })
        } else {
            section.classList.remove('your-active-class');
        }
    })
}

/**
 * @constructor scroll_to_anchor
 * @description Scroll to anchor ID using scrollTO event
 * @param {number} navbar_height
 * @param {number} current_y
 * @param {string} derived_id
 * @param {number} section_y
 * @param {number} destination_y
 * - look thorugh each link in the navigation menu
 * - addEventListener for when the link is clicked
 * ---> listener stores the navbar height value
 * ---> stores current y-position
 * ---> convert link text to section id
 * ---> store location need to scroll to
 * ---> calculate destination_y
 * ---> scroll to destination_y in a "smooth" manner
*/
function scroll_to_anchor() {
    document.querySelectorAll('.menu__link').forEach(item => {
        item.addEventListener('click', event => {
            let navbar_height = document.querySelector('header').getBoundingClientRect().height;
            let current_y = window.scrollY;
            let derived_id = item.innerText.toLowerCase().replace(/\s/g, '');
            let section_y = document.getElementById(derived_id).getBoundingClientRect().y;
            let destination_y = (current_y - navbar_height) + section_y + 1;

            window.scrollTo({
                top: destination_y,
                left: 0,
                behavior: 'smooth'
            });
        })
    })
}

/**
 * @constructor toggle_navigation
 * @description Hide navigation when the user is not scrolling. However, navigation is present 
 *              on page load still
 * @param {header} header
*/
function toggle_navigation() {
    header = document.querySelector(".page__header");
    header.style.display = "block";
    setTimeout(function(){ header.style.display = "none"; }, 5000);
}

/**
 * @constructor toggle_scroll_button
 * @description Show the scroll to top button once the page is scrolled below the page fold
 * @param {button} my_button
 * - Once the user scrolls below the fold of the page, a "Scroll to top" button will appear
 * - on the bottom right of the screen. If the user scrolls back above the fold of the page
 * - the button will disappear again.
*/
function toggle_scroll_button() {
    mybutton = document.getElementById("my_button");

    if (window.scrollY > window.innerHeight) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

/**
 * @constructor scroll_to_top
 * @description scrolls to the top of the page smoothly
*/
function scroll_to_top() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

/**
 * Once the window has loaded:
 * - Build the navigation
 * - Set the scroll_to_anchor events when the window completes loading
*/
window.onload = function () {
    build_nav(); // build the navigation menu 
    scroll_to_anchor(); // set scroll_to_anchor events
}

/**
 * When the user scrolls:
 * - Update the active section and navigation link
*/
window.onscroll = function () {
    set_active_section_link(); // update the active section and nav link
    toggle_scroll_button(); // show 'Scroll to top' button when user scrolls below page fold
    toggle_navigation(); // hide navigation when not scrolling
}