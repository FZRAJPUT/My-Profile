const menu = document.getElementById('opt');
const menuIcon = document.getElementById('icon');

var flag = true;
menuIcon.addEventListener('click',()=>{

    if(flag){
        menu.style.display = "flex";
        menuIcon.classList.remove('ri-menu-line');
        menuIcon.classList.add('ri-close-line');
    }
    else{
        menu.style.display = "none";
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
    }

    flag = !flag;
})


