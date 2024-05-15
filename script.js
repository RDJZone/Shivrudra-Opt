$(document).ready(function () {
    // Scroll down sticky navbar script start
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
      // Scroll down sticky navbar script end
  
      // Scroll up Button script start
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
      // Scroll up Button script end
  
      // Fade In & Fade Out Elements on Scroll script start
      $(".fadein").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass("showme");
        }
        if (bottom_of_window < bottom_of_element) {
          $(this).removeClass("showme");
        }
        // Fade In & Fade Out Elements on Scroll script end
      });
    });
  
    // Scroll up Button script start
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
    });
    // Scroll up Button script end
  
    // Typing animation script start
    var typed = new Typed(".typing", {
      strings: ["Human Resourse Specialist", "Front End Developer", "Business Developer", "Entrepreneur"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing2", {
      strings: ["Human Resourse Specialist", "Front End Developer", "Business Developer", "Entrepreneur"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    // toggle menu/navbar script start
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
    // toggle menu/navbar script end
  
    // owl carousel script start
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
    // owl carousel script end
  });

  // const express = require('express');
  // const nodemailer = require('nodemailer');
  // const bodyParser = require('body-parser');
  
  // const app = express();
  // const PORT = process.env.PORT || 3000;
  
  // // Body Parser Middleware
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(bodyParser.json());
  
  // // Route to handle form submission
  // app.post('/send-email', (req, res) => {
  //   // Pull out form data
  //   const { name, email, subject, message } = req.body;
  
  //   // Create reusable transporter object using the default SMTP transport
  //   let transporter = nodemailer.createTransport({
  //     service: 'Gmail',
  //     auth: {
  //       user: 'nitinkukdyal222@gmail.com', // Your email address
  //       pass: 'Nitin2003@' // Your email password (consider using environment variables instead)
  //     }
  //   });
  
  //   // Setup email data with unicode symbols
  //   let mailOptions = {
  //     from: '"Nitin" <nitinkukdyal222@gmail.com>', // Sender address
  //     to: '', // List of receivers
  //     subject: subject, // Subject line
  //     text: `From: ${name} <${email}> \n\nMessage: ${message}` // Plain text body
  //   };
  
  //   // Send mail with defined transport object
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error(error);
  //       res.status(500).send('Internal Server Error');
  //     } else {
  //       console.log('Email sent: ' + info.response);
  //       res.send('Email sent successfully');
  //     }
  //   });
  // });
  
  // // Start the server
  // app.listen(PORT, () => {
  //   console.log(`Server is running on port ${PORT}`);
  // });
  // document.addEventListener('DOMContentLoaded', function () {
  //   const form = document.getElementById('emailForm');
  //   form.addEventListener('submit', function (event) {
  //     event.preventDefault();
  //     const formData = new FormData(form);
  //     const xhr = new XMLHttpRequest();
  //     xhr.open('POST', '/send-email', true);
  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState === XMLHttpRequest.DONE) {
  //         if (xhr.status === 200) {
  //           alert('Email sent successfully');
  //           form.reset();
  //         } else {
  //           alert('Failed to send email. Please try again later.');
  //         }
  //       }
  //     };
  //     xhr.send(formData);
  //   });
  // });
  