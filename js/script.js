

//toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href *=' + id + ']').classList.add('active');
        
            });
        };
    });


    // sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle a icon and navbar when click navbar link

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// scroll reveal
    ScrollReveal({ 
        //reset: true,
        distance: '80px',
        duraction: 2000,
        delay:200
     });

     ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
     ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
     ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
     ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


    //  multiple text typed js

    const typed =new Typed('.multiple-text',{
        strings: ['MCA Student','Developer'],
        typeSped:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    });

    // hidden details

    document.getElementById("read-more-btn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        const moreDetails = document.getElementById("more-details");
        if (moreDetails.style.display === "none" || moreDetails.style.display === "") {
            moreDetails.style.display = "block"; // Show the hidden details
            this.textContent = "Read Less"; // Change button text
        } else {
            moreDetails.style.display = "none"; // Hide the details again
            this.textContent = "Read More"; // Reset button text
        }
    });

    // email setting 

    (function() {
        emailjs.init("0_HXQRBmaPjySxc5E"); // Replace with your EmailJS User ID
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Send form data via EmailJS
        emailjs.sendForm('service_84ms6lc', 'template_q78jnwd', this)
            .then(function() {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset(); // Reset the form
            }, function(error) {
                alert('Failed to send the message. Please try again.');
                console.log(error);
            });
    });