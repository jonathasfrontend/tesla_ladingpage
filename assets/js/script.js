var btnAbrir = document.querySelector('.open');
var btnClose = document.querySelector('.close')

btnAbrir.addEventListener('click',()=>{
            let menu = document.querySelector('.menu-toogle');
            menu.style.left = "0";
    
                
});
            
btnClose.addEventListener('click',(e)=>{
            
            e.preventDefault();
            
            let menu = document.querySelector('.menu-toogle');
            menu.style.left = "-100%";
            
})