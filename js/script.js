var typed = new Typed(".multiple-text", {
   strings: ["Fullstack Developer", "Quality Engineer", "Process Engineer", "Test Engineer"],
   typeSpeed: 50,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
})

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
      let  top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
         // active navbar  links
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
      }
   });
   // sticky header
   let header = document.querySelector('header');
   
   header.classList.toggle('sticky', window.scrollY > 100);
   
   // remove toggle icon and navbar when clicking navbar Links (scroll)
   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
}

// scroll reveal
ScrollReveal({
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.education-row, .skills-row, .portfolio-box, .contact-form, .footer', { origin: 'bottom' });
 ScrollReveal().reveal('.about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });