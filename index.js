// toggle navbar //
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {

    navbar.classList.toggle('active')
}


// scroll section active links //

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        };
    });

    //STICKY NAVBAR
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    //REMOVE STICKY NAVBAR WHEN CLICKING ON LINK //SCROLL
    navbar.classList.remove('active')
};


//scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.homeContent, .heading', { origin: 'top' });
 ScrollReveal().reveal('.homeImg, .serviceContainer, .portfolioBox, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.homeContent h1 , .aboutImg', { origin: 'left' });
 ScrollReveal().reveal('.homeContent p , .aboutContent', { origin: 'right' });

 //typedjs

 const typed = new Typed('.multipleText', {
    strings: ['Web Developer','Frontend Developer', 'Graphics Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
 })

 // Send email

 const sendEmail = () => {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "wollyfad@gmail.com",
        Password : "",
        To : 'wollyfad@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Number: " + document.getElementById("phone-no").value
            + "<br> Email Subject: " + document.getElementById("email-sub").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(
        $('.sub-btn').click(function(){
            $('.alert').removeClass('hide');
            $('.alert').addClass('show');
        }),
        $('.close-btn').click(function(){
            $('.alert').addClass('hide');
            $('.alert').removeClass('show');
        })
      )
    );
 }

//  Alert

    // const alertMsg = () => {
    //     $('.sub-btn').click(function(){
    //         $('.alert').removeClass('hide');
    //         $('.alert').addClass('show');
    //     });
    //     $('.close-btn').click(function(){
    //         $('.alert').addClass('hide');
    //         $('.alert').removeClass('show');
    //     });
    // }

function downloadPDF() {
  const url = "path/My Resume.docx";
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "file.pdf";
      link.click();
    });
}
