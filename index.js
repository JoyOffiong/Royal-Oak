const menuBar = document.querySelector('.menu');
const closeBar = document.querySelector('.close');
const menuList = document.querySelector('.mobile-links')

menuBar.addEventListener('click', () =>{
    menuBar.style.display='none'
    menuList.style.transform='translateX(0%)'
    closeBar.style.display='block'
})
closeBar.addEventListener('click', () =>{
    menuBar.style.display='block'
    menuList.style.transform='translateX(-100%)'
    closeBar.style.display='none'
})

const linkTop =document.querySelector ('.link-top');
const linkWrap =document.querySelector ('.link');

linkWrap.addEventListener('click', () =>{
        linkTop.style.display='block'
        linkWrap.style.backgroundcolor ='rgb(155, 151, 151)'
    

})