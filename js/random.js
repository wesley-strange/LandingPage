//https://w3epic.com/dynamic-navigation-menu-with-javascript/
window.onload = function () {
    var sections = document.getElementsByTagName("section");    
    for (var i=0;i<sections.length;i++) {
        sections[i].onclick = function () {
            return false;
        }
        sections[i].onmouseover = function () { // toggleMenu
            var startMenu = this.href.lastIndexOf("/")+1;
            var stopMenu = this.href.lastIndexOf(".");
            var thisMenuName = this.href.substring(startMenu,stopMenu);

            document.getElementById(thisMenuName).style.display="block";

            this.parentNode.className = thisMenuName;
            this.parentNode.onmouseout = function () { //toggleDivOff;
                document.getElementById(this.className).style.display = "none"; 
            } 
            this.parentNode.onmouseover = function () {  //toggleDivOn;
                document.getElementById(this.className).style.display = "block"; 
            }
        }
    }
}


