const navSlide =()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll(".nav-links li");
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
    navLink.forEach((link,index)=>{
        link.style.animation = 'navLinkFade -1 ease forward ${index/7+2}s';
    })
    
}
navSlide();
const navSlide2 =()=>{
    const burger = document.querySelector(".burger2");
    const nav = document.querySelector('.nav-links-2');
    const navLink = document.querySelectorAll(".nav-links-2 .item-li-2");
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-click');
    });
    navLink.forEach((link,index)=>{
        link.style.animation = 'navLinkFade -1 ease forward ${index/7+2}s';
    })
    
}
navSlide2();