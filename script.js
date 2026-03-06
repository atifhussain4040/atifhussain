// Auto Design Padding
const navbar = document.querySelector(".Navbar");

let paddingElements = [navbar]

function paddingFnc(elements){

    for(let i = 0;i < elements.length; i++){
        let padding;
        if (window.innerWidth < 500 && window.innerWidth > 0){
            padding = "0px 20px";
            elements[i].style.padding = padding;
        } else if(window.innerWidth < 1400 && window.innerWidth > 500) {
            padding = "0px 20px";
            elements[i].style.padding = padding;
        } else if(window.innerWidth < 2000 && window.innerWidth > 1100){
            padding = "0px " + window.innerWidth/5 + "px"; 
            elements[i].style.padding = padding;
        } else {
            padding = "0px " + window.innerWidth/6 + "px"; 
            elements[i].style.padding = padding;
        }
        
    }
}

paddingFnc(paddingElements)
window.addEventListener('resize', () => paddingFnc(paddingElements))

// Navbar Change While Scrolling

const scrollNav = document.querySelector(".Scroll-Nav")

function navbarScroll(){
    if (scrollY != 0){
       scrollNav.style.display = "Flex" 
       scrollNav.style.width = "50%"
    } else {
        scrollNav.style.display = "None"
    }
}
window.addEventListener('scroll', navbarScroll)

