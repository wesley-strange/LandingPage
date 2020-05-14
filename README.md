# Landing Page Project

The user will use this landing page to navigate to different sections on the page that they are interested in reading. The contents of this page is expected to grow as time passes, so the page needs to be dynamic and adapt to future change. All aspects of the landing page should be geared towards making the user's reading experience easy and enjoyable.


## Format of the Landing Page

The landing page consists of the navigation bar at the very top, the page heading, and the individual reading sections.


## Navigation Bar

The expectation is that additional sections will continue to be added to the landing page, so we are building a dynamic horizontal navigation bar after the window has loaded. The function `build_nav()` is used to build the nav bar. The horizontal nav bar consumes less space than the vertical nav bar, we recommend keeping the nav bar horizontal for this reason. If the number of sections grows too large and the nav bar consumes too much of the screen, then another solution should be developed. One possible solution would be a vertical nav bar on the side of the page.

The user can use the nav links to jump directly to the section they are interested in. We chose to use the `window.scrollTo` function to create a smooth scrolling appearance which is pleasing to the eye. The function `scroll_to_anchor` contains the code for this feature.

We also chose to hide the nav bar when the user is not scrolling (minus the initial page load where the nav bar will be visible). By hiding the nav bar, it puts the content front and center. View the function `toggle_navigation` which completes this action.

Lastly, we are highlighting the nav link that conrresponds to the section currently in the viewing pane to help reinforce to the user where they are currently at on the page. See `set_active_section_link` function.


## Sections

Each section consists of the section header and the section content. The section that is currently in the viewport is highlighted. You may consider removing this feature if the user does not find any added benefit or finds it to be distracting. The `set_active_section_link` function is used to complete this action.


## Scroll to Top

Once the user scrolls below the fold of the page, a button appears in the lower-right corner of the screen that, when clicked, allows the user to scroll to the top of the page. Again, we chose to use the `window.scrollTo` function to create a smooth scrolling appearance which is pleasing to the eye. See the functions `toggle_scroll_button` and `scroll_to_top` for more details.


## Future Enhancements (Backlog)

* Make sections collapsable.