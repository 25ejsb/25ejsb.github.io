var open = false;
var scrollToFrame = document.getElementById("scrollToFrame");
var scrollBtn = document.getElementById("scroll");

$(".header-section__headextra").css("animation-delay", "0.3s").addClass("animated lightSpeedIn");

var send = document.getElementById("sendcontact");

function sendEmail() {
    var tempParams = {
      from_name: document.getElementById("email").value,
      to_name: "eitan.brochstein@icloud.com",
      message: document.getElementById("name").value + ", \n" + document.getElementById("email").value + ", \n" + document.getElementById("message").value
    };
  
    emailjs.send('service_t93tjtg', 'template_67wnjyd', tempParams, "e5QqTyM8AtPOxMClT").then(function(res){
      console.log("message success! " + res.status);
    });
};

send.addEventListener("click", () => {
    var contactname = document.getElementById("name");
    var contactemail = document.getElementById("email");
    var contactmessage = document.getElementById("message");
    var field1 = document.getElementById("field-1");
    var field2 = document.getElementById("field-2");
    var field3 = document.getElementById("field-3");
    if (field1.classList.contains("contact-section__main--field--1--open")) {
        field1.classList.remove("contact-section__main--field--1--open");
    }
    if (field2.classList.contains("contact-section__main--field--2--open")) {
        field2.classList.remove("contact-section__main--field--2--open");
    }
    if (field3.classList.contains("contact-section__main--field--3--open")) {
        field3.classList.remove("contact-section__main--field--3--open");
    }
    if (contactname.value == "") {
        field1.classList.add("contact-section__main--field--1--open");
    }
    if (contactemail.value == "") {
        field2.classList.add("contact-section__main--field--2--open");
    }
    if (contactmessage.value == "") {
        field3.classList.add("contact-section__main--field--3--open");
    }
    if (contactname.value != "" && contactemail.value != "" && contactmessage.value != "") {
        sendEmail();
        contactname.value = "";
        contactemail.value = "";
        contactmessage.value = "";
    }
});

function openBtn() {
    if (open == false) {
        open = true;
        scrollToFrame.classList.remove("scroll-to-frame");
        scrollToFrame.classList.add("opened");

        scrollBtn.innerHTML = "&#10005";
    }
    else {
        open = false;
        scrollToFrame.classList.remove("opened");
        scrollToFrame.classList.add("scroll-to-frame");
        scrollBtn.innerHTML = "&#8801"
    }
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode == 27) {
        openBtn();
    }
});

var homeBtn = document.getElementById("homebtn");
var aboutBtn = document.getElementById("aboutbtn");
var testimonialsBtn = document.getElementById("testimonialsbtn");
var contactBtn = document.getElementById("contactbtn");

homeBtn.addEventListener("click", () => {
    scrollToFrame.classList.remove("opened");
    scrollToFrame.classList.add("scroll-to-frame");
    scrollBtn.innerHTML = "&#8801"
});

aboutBtn.addEventListener("click", () => {
    scrollToFrame.classList.remove("opened");
    scrollToFrame.classList.add("scroll-to-frame");
    scrollBtn.innerHTML = "&#8801"
});

testimonialsBtn.addEventListener("click", () => {
    scrollToFrame.classList.remove("opened");
    scrollToFrame.classList.add("scroll-to-frame");
    scrollBtn.innerHTML = "&#8801"
});

contactBtn.addEventListener("click", () => {
    scrollToFrame.classList.remove("opened");
    scrollToFrame.classList.add("scroll-to-frame");
    scrollBtn.innerHTML = "&#8801"
});

scrollBtn.addEventListener("click", () => {
    openBtn();
});

$(document).ready(function() {
    $(".paragraphs--1").waypoint(function(direction) {
        $(".paragraphs--1").addClass("opacity-in");
    }, {
        offset: '100%',
    });
    $(".paragraphs--2").waypoint(function(direction) {
        $(".paragraphs--2").addClass("opacity-in");
    }, {
        offset: '100%',
    });
    $(".paragraphs--3").waypoint(function(direction) {
        $(".paragraphs--3").addClass("opacity-in");
    }, {
        offset: '100%',
    });
    $(".paragraphs--4").waypoint(function(direction) {
        $(".paragraphs--4").addClass("opacity-in");
    }, {
        offset: '100%',
    });
});

const image1 = document.querySelectorAll(".about-section__image1");
const image2 = document.querySelectorAll(".about-section__image2");
const testimonialSection = document.querySelectorAll(".testimonials-section");
const contactSection = document.querySelectorAll(".contact-section");

window.addEventListener("scroll", function(){

    function checkboxes() {
        const triggerBottom = window.innerHeight / 5 * 3.5
        const triggerBottomSection = window.innerHeight / 5 * 0
        const triggerTopSection = window.innerHeight / 5 * -10.5
        image1.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("about-section__image1--open");
            } else {
                box.classList.remove("about-section__image1--open");
            }
        });
        testimonialSection.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottomSection && boxTop > triggerTopSection) {
                box.classList.add("testimonials-section--open");
            }
            else {
                box.classList.remove("testimonials-section--open");
            }
        });
        image2.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("about-section__image2--open");
            }
            else {
                box.classList.remove("about-section__image2--open");
            }
        });
    }
    checkboxes();
});