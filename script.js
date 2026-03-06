// Auto Design Padding
const navbar = document.querySelector(".Navbar");

let paddingElements = [navbar]

function paddingFnc(elements){

    for(let i = 0;i < elements.length; i++){
        let padding;
        if (window.innerWidth < 500 && window.innerWidth > 0){
            padding = "0px 20px";
            elements[i].style.padding = padding;
        } else if(window.innerWidth < 1000 && window.innerWidth > 500) {
            padding = "0px 20px";
            elements[i].style.padding = padding;
        } else {
            padding = "0px " + window.innerWidth/5 + "px"; 
            elements[i].style.padding = padding;
        }
        
    }
}

paddingFnc(paddingElements)
window.addEventListener('resize', () => paddingFnc(paddingElements))