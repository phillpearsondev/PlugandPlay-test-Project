
let getExpandableNavBox = document.querySelector(".nav-box");
let getDarkenOtherThanNavMenu = document.querySelector(".mobile-darken-overlay-effect");
let getNavWhiteBox = document.querySelector(".nav-white-box");
let NavExpanded = false;

let expandOrCloseMobileNav = function() {
    if (NavExpanded === false) {
        getExpandableNavBox.style.visibility = "visible";
        getDarkenOtherThanNavMenu.style.visibility = "visible";
        getNavWhiteBox.style.visibility = "visible";
        getNavWhiteBox.style.width = "80%";
        getExpandableNavBox.style.width = "80%";

        NavExpanded = true;
    }
    else {
        getExpandableNavBox.style.visibility = "hidden";
        getDarkenOtherThanNavMenu.style.visibility = "hidden";
        getNavWhiteBox.style.visibility = "hidden";
        getNavWhiteBox.style.width = "0";
        getExpandableNavBox.style.width = "0";

        NavExpanded = false;
    }
}