const menu = document.getElementById('opt');
const menuIcon = document.getElementById('icon');


var flag = true;
menuIcon.addEventListener('click',()=>{

    if(flag){
        menu.style.display = "flex" ;
    }
    else{
        menu.style.display = "none" ;
    }

    flag = !flag;
})




