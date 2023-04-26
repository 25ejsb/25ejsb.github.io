var newname = document.getElementById("name");
var newemail = document.getElementById("email");
var newphone = document.getElementById("phone");
var newdates = document.getElementById("dates");
var newsend = document.querySelector(".send");

function sendEmail() {
    var tempParams = {
      from_name: document.getElementById("email").value,
      to_name: "adam@shulmanrealtor.com",
      message: "This is consultation data: \n" + newname.value + "\n" + newemail.value + "\n" + newphone.value + "\n Dates:\n" + newdates.value
    };
  
    emailjs.send('service_t93tjtg', 'template_67wnjyd', tempParams, "e5QqTyM8AtPOxMClT").then(function(res){
      console.log("message success! " + res.status);
    });
};

newsend.addEventListener("click", () => {
    if (newname.value == "") {
        document.querySelector(".name-label").innerHTML = "Name: Please fill out";
        document.querySelector(".name-label").style = "color:red;";
    } else {
        document.querySelector(".name-label").innerHTML = "Name:";
        document.querySelector(".name-label").style = "color:black;";
    }
    if (newemail.value == "") {
        document.querySelector(".email-label").innerHTML = "Email: Please fill out";
        document.querySelector(".email-label").style = "color:red;";
    } else {
        document.querySelector(".email-label").innerHTML = "Email:";
        document.querySelector(".email-label").style = "color:black;";
    }
    if (newphone.value == "") {
        document.querySelector(".phone-label").innerHTML = "Phone Number: Please fill out";
        document.querySelector(".phone-label").style = "color:red;";
    } else {
        document.querySelector(".phone-label").innerHTML = "Phone Number:";
        document.querySelector(".phone-label").style = "color:black;";
    }
    if (newdates.value == "") {
        document.querySelector(".dates-label").innerHTML = "Days and Times: Please fill out";
        document.querySelector(".dates-label").style = "color:red;";
    } else {
        document.querySelector(".dates-label").innerHTML = "Days and Times:";
        document.querySelector(".dates-label").style = "color:black;";
    }
    if (newname.value != "" && newemail.value != "" && newphone.value != "" && newdates.value != "") {
        sendEmail();
        newname.value = "";
        newemail.value = "";
        newphone.value = "",
        newdates.value = ""
    }
});