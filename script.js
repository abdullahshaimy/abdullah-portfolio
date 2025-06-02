// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(links => links.classList.remove('active'));
            let currentLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (currentLink) currentLink.classList.add('active');

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        //else {
        //    sec.classList.remove('show-animate');
      //  }
    }); 

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (acroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animatio footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.documentElement.scrollHeight);
}
// contact page 
function emailSend(){
    
    Email.send({
        Host : "s1.maildns.net",
        Username : "abdullahshaimyofficial@gmail.com",
        Password : "5A16B91C5E8BDC0F5D058D4BE956B0B5E61C",
        To : 'abdullahshaimyofficial@gmail.com',
        From : "abdullahshaimyofficial@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
     }