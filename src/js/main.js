document.addEventListener('DOMContentLoaded', function () {
    inicarApp();
});

function inicarApp() {
    load();
    menu();
    slide();
}

function menu() {
    const menu = document.querySelector('#menu-bars');
    const navbar = document.querySelector('.navbar');
       
    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    
    const section = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');


    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        
        section.forEach(sec =>{

            let top = window.scrollY;
            let height = sec.offsetHeight;
            let offset = sec.offsetTop - 150;
            let id = sec.getAttribute('id');
        
            if(top >= offset && top < offset + height){
              navLinks.forEach(links =>{
                links.classList.remove('active');

                let linkID = document.querySelectorAll('header .navbar a[href*='+id+']');
                if(linkID !== links){
                    links.classList.remove('active');
                }
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
              });
            };
        
          });
    };

    document.querySelector('#search-icon').onclick = () =>{
        document.querySelector('#search-form').classList.toggle('active');
    };

    document.querySelector('#close').onclick = () =>{
        document.querySelector('#search-form').classList.remove('active');
    }
}

function slide(){
    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
       loop:true,
      });

      var swiper2 = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
       loop:true,
       breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
       }
      });
}

function load(){

    function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
    }
    
    function fadeOut(){
        setInterval(loader, 3000);
    }

    window.onload = fadeOut;
    

}
