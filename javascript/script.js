var open = false;
var scrollToFrame = document.getElementById("scrollToFrame");
var scrollBtn = document.getElementById("scroll");

$(".header-section__headextra").css("animation-delay", "0.3s").addClass("animated lightSpeedIn");

var send = document.getElementById("sendcontact");
var thanks = document.querySelector(".contact-section__thanks");

var scrolledUp = true;
var mobileNavOpen = false;

$(".nav__right__tab").click(function() {
    if (!mobileNavOpen) {
        mobileNavOpen = true;
        $(".nav__right__tab").html("X")
        $(".mobile-nav").css("display", "flex")        
    } else {
        mobileNavOpen = false
        $(".nav__right__tab").html("&equiv;")
        $(".mobile-nav").css("display", "none") 
    }
})

window.onscroll = () => {
    if (window.scrollY > 100) {
        scrolledUp = false;
        $(".nav__right a").addClass("sticky-text")
        $(".nav__right__tab").css("box-shadow", "0 0.5rem 1rem rgba(0, 0, 0, 0.5)")
        document.querySelector(".nav__left img").src = "images/logoblack.png"
    } else {
        scrolledUp = true;
        $(".nav__right a").removeClass("sticky-text")
        $(".nav__right__tab").css("box-shadow", "0 0.5rem 1rem rgba(0, 0, 0, 0)")
        document.querySelector(".nav__left img").src = "images/logocopy.png"
    }
}

setInterval(() => {
    // about nav
    if ($(".about-nav a:hover").length !== 0 || $(".about-nav .pc-nav:hover").length !== 0) {
        $(".about-nav .pc-nav").css("display", "flex")
        if (scrolledUp) {
            $(".about-nav .pc-nav").css({"backgroundColor": "black", "color": "white"})
        } else {
            $(".about-nav .pc-nav").css({"backgroundColor": "white", "color": "black"})
        }
    } else {
        $(".about-nav .pc-nav").css("display", "none")
    }

    // community
    if ($(".community a:hover").length !== 0 || $(".community .pc-nav:hover").length !== 0) {
        $(".community .pc-nav").css("display", "flex")
        if (scrolledUp) {
            $(".nav").css("backgroundColor", "black")
            $(".community .pc-nav").css({"backgroundColor": "black", "color": "white"})
        } else {
            $(".community .pc-nav").css({"backgroundColor": "white", "color": "black"})
        }
    } else {
        $(".community .pc-nav").css("display", "none")
    }

    // properties
    if ($(".properties a:hover").length !== 0 || $(".properties .pc-nav:hover").length !== 0) {
        $(".properties .pc-nav").css("display", "flex")
        if (scrolledUp) {
            $(".properties .pc-nav").css({"backgroundColor": "black", "color": "white"})
        } else {
            $(".properties .pc-nav").css({"backgroundColor": "white", "color": "black"})
        }
    } else {
        $(".properties .pc-nav").css("display", "none")
    }

    // contact
    if ($(".contact-nav a:hover").length !== 0 || $(".contact-nav .pc-nav:hover").length !== 0) {
        $(".contact-nav .pc-nav").css("display", "flex")
        if (scrolledUp) {
            $(".nav").css("backgroundColor", "black")
            $(".contact-nav .pc-nav").css({"backgroundColor": "black", "color": "white"})
        } else {
            $(".nav").css("backgroundColor", "white")
            $(".contact-nav .pc-nav").css({"backgroundColor": "white", "color": "black"})
        }
    } else {
        $(".contact-nav .pc-nav").css("display", "none")
        $(".nav").css("border-radius", "0 0 2rem 2rem")
    }

    // for nav bar
    if ($(".nav__right a:hover").length !== 0 || $(".pc-nav:hover").length !== 0) {
        if (scrolledUp) {
            $(".nav").css("backgroundColor", "black")
            $(".link-h3").css("borderBottom", "3px solid white")
        } else {
            $(".nav").css("backgroundColor", "white")
            $(".link-h3").css("borderBottom", "3px solid black")
        }
        $(".nav").css("border-radius", "0 0 0 0")
    } else {
        if (scrolledUp) {
            $(".nav").css({"backgroundColor": "transparent", "boxShadow": "0 0.5rem 1rem rgba(0, 0, 0, 0)"})
        } else {
            $(".nav").css({"backgroundColor": "white", "boxShadow": "0 0.5rem 1rem rgba(0, 0, 0, 0.5)"})
        }
        $(".nav").css("border-radius", "0 0 2rem 2rem")
    }
    if (scrolledUp) {
        $(".mobile-nav").css({"backgroundColor": "black", "color": "black"})
    } else {
        $(".mobile-nav").css({"backgroundColor": "white", "color": "white"}) 
    }
    if (scrolledUp && mobileNavOpen) {
        $(".nav").css({"backgroundColor": "black", "border-radius": "0"});
    } else if (!scrolledUp && mobileNavOpen) {
        $(".nav").css({"backgroundColor": "white", "border-radius": "0"});
    }
    if (!window.matchMedia("(max-width: 48em)").matches) {
        $(".mobile-nav").css("display", "none")
        mobileNavOpen = false
        $(".nav__right__tab").html("&equiv;")
    }
    if (!window.matchMedia("(min-width: 48.01em)").matches) {
        $(".pc-nav").css("display", "none")
    }
}, 1)

function sendEmail() {
    var tempParams = {
      from_name: document.getElementById("email").value,
      to_name: "adam@shulmanrealtor.com",
      message: document.getElementById("first-name").value + " " + document.getElementById("last-name").value + ", \n" + document.getElementById("email").value + ", \n" + document.getElementById("phone").value
    };
  
    emailjs.send('service_t93tjtg', 'template_67wnjyd', tempParams, "e5QqTyM8AtPOxMClT").then(function(res){
      console.log("message success! " + res.status);
    });
    thanks.classList.add("contact-section__thanks--active");
};

send.addEventListener("click", () => {
    var contactfirstname = document.getElementById("first-name");
    var contactlastname = document.getElementById("last-name");
    var contactemail = document.getElementById("email");
    var contactphone = document.getElementById("phone");
    var checker = document.getElementById("check");
    var field1 = document.getElementById("field-1");
    var field2 = document.getElementById("field-2");
    var field3 = document.getElementById("field-3");
    var field4 = document.getElementById("field-4");
    if (field1.classList.contains("contact-section__main--field--1--open")) {
        field1.classList.remove("contact-section__main--field--1--open");
    }
    if (field2.classList.contains("contact-section__main--field--2--open")) {
        field2.classList.remove("contact-section__main--field--2--open");
    }
    if (field3.classList.contains("contact-section__main--field--3--open")) {
        field3.classList.remove("contact-section__main--field--3--open");
    }
    if (field4.classList.contains("contact-section__main--field--4--open")) {
        field4.classList.remove("contact-section__main--field--4--open");
    }
    if (contactfirstname.value == "" || contactlastname.value == "") {
        field1.classList.add("contact-section__main--field--1--open");
    }
    if (contactemail.value == "") {
        field2.classList.add("contact-section__main--field--2--open");
    }
    if (contactphone.value == "") {
        field3.classList.add("contact-section__main--field--3--open");
    }
    if (checker.checked === false) {
        field4.classList.add("contact-section__main--field--4--open");
    }
    if (contactfirstname.value != "" && contactlastname != "" && contactemail.value != "" && contactphone.value != "" && checker.checked === true) {
        sendEmail();
        contactfirstname.value = "";
        contactlastname.value = "";
        contactemail.value = "";
        contactphone.value = "";
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

// var homeBtn = document.getElementById("homebtn");
var aboutBtn = document.getElementById("aboutbtn");
var whatsnewbtn = document.getElementById("whatsnewbtn");
var recentlySoldBtn = document.getElementById("recentlysoldbtn");
var testimonialsBtn = document.getElementById("testimonialsbtn");
var contactBtn = document.getElementById("contactbtn");

// homeBtn.addEventListener("click", () => {
//     scrollToFrame.classList.remove("opened");
//     scrollToFrame.classList.add("scroll-to-frame");
//     scrollBtn.innerHTML = "&#8801"
// });

// whatsnewbtn.addEventListener("click", () => {
//     scrollToFrame.classList.remove("opened");
//     scrollToFrame.classList.add("scroll-to-frame");
//     scrollBtn.innerHTML = "&#8801";
// });

// aboutBtn.addEventListener("click", () => {
//     scrollToFrame.classList.remove("opened");
//     scrollToFrame.classList.add("scroll-to-frame");
//     scrollBtn.innerHTML = "&#8801";
// });

// recentlySoldBtn.addEventListener("click", () => {
//     scrollToFrame.classList.remove("opened");
//     scrollToFrame.classList.add("scroll-to-frame");
//     scrollBtn.innerHTML = "&#8801";
// });

// testimonialsBtn.addEventListener("click", () => {
//     scrollToFrame.classList.remove("opened");
//     scrollToFrame.classList.add("scroll-to-frame");
//     scrollBtn.innerHTML = "&#8801";
// });

// contactBtn.addEventListener("click", () => {
//     scrollToFrame.classList.remove("opened");
//     scrollToFrame.classList.add("scroll-to-frame");
//     scrollBtn.innerHTML = "&#8801";
// });

// scrollBtn.addEventListener("click", () => {
//     openBtn();
// });

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
const testimonial = document.querySelectorAll(".testimonials-section__testimonial");
const contactSection = document.querySelectorAll(".contact-section");
const previoussoldboxes = document.querySelectorAll(".properties-sold-section__house");

var aboutbg = document.querySelectorAll(".about-section__background");
var singAboutBg = document.querySelector(".about-section__background");

window.addEventListener("scroll", function(){

    function checkboxes() {
        const triggerBottom = window.innerHeight / 5 * 3.5
        const triggerBottomSection = window.innerHeight / 5 * 0
        const triggerTopSection = window.innerHeight / 5 * -11.5
        image1.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("about-section__image1--open");
                singAboutBg.style = "filter: blur(0.2rem)";
            } else {
                box.classList.remove("about-section__image1--open");
                singAboutBg.style = "filter: blur(0.3rem)";
            }
        });
        testimonial.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("testimonials-section__testimonial--open");
            } else {
                box.classList.remove("testimonials-section__testimonial--open");
            }
        })
        previoussoldboxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("properties-sold-section__house--open");
            } else {
                box.classList.remove("properties-sold-section__house--open");
            }
        })
        image2.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("about-section__image2--open");
            }
            else {
                box.classList.remove("about-section__image2--open");
            }
        });
        aboutbg.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottomSection) {
                window.addEventListener("scroll", function(){
                    let value = window.scrollY;
                    box.style = "transform: scale(" + (value / 900) + ");";
                });
            }
            else {
                window.addEventListener("scroll", () => {
                    box.style = "transform: scale(1)";
                });
            }
        })
    }
    checkboxes();
});