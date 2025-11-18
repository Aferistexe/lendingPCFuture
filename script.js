// modal
const modal = document.getElementById("modal")
const openbtn = document.getElementById('openModal1');
const closebtn = document.getElementById("closeModal");
const openbtn2 = document.getElementById("openModal2");
const openbtn3 = document.getElementById('openModal3');



function openModal() {
    console.log("Open Modal");
    modal.style.display='flex';

}

function closeModal() {
    console.log("Close Modal");
    modal.style.display='none';
    
}


openbtn.addEventListener('click',openModal);
closebtn.addEventListener('click',closeModal);
openbtn2.addEventListener('click',openModal);
openbtn3.addEventListener('click',openModal);



window.addEventListener("click",function(event){
    if(event.target === modal){
        closeModal();
    }
})

// hamburger menu

const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

let OpenMenuboolen = false;

function ToggleMenu(){
    if(OpenMenuboolen){
        console.log("Меню закрыто")
        menu.style.display = 'none'
        hamburger.style.filter= "invert(100%)"
        OpenMenuboolen= false
        
    }else {
        console.log("Открылось меню");
        menu.style.display="flex"
        hamburger.style.filter= "invert(0%)"
        OpenMenuboolen = true
    }
}

hamburger.addEventListener("click",ToggleMenu)
window.addEventListener("click",function(event){
    if(OpenMenuboolen && !menu.contains(event.target)&& hamburger !== event.target){
        ToggleMenu();
    }

})

