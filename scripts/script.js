let pLoginSebagai = document.getElementById('ploginSebagai');
let titleLogin  = document.getElementById('titleLogin');
let userprofile = document.getElementsByClassName('userProfile');
let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('password');

if (localStorage.length == 0) {
    window.localStorage.setItem('isLoggedOut', 1);
    window.localStorage.setItem('isLoggedInAsPembeli', 0);
    window.localStorage.setItem('isLoggedInAsPenjual', 0);
    window.localStorage.setItem('loginAsPembeli', 1);
    window.localStorage.setItem('loginAsPenjual', 0);
}

for (let i = 0; i < userprofile.length; i++) {
    if (userprofile[i] != null) {
        if (window.localStorage.getItem('isLoggedOut') == '1') {
            userprofile[i].setAttribute('href', 'login.html');
            window.localStorage.setItem('isLoggedOut', 1);
            window.localStorage.setItem('isLoggedInAsPembeli', 0);
            window.localStorage.setItem('isLoggedInAsPenjual', 0);
            window.localStorage.setItem('loginAsPembeli', 1);
            window.localStorage.setItem('loginAsPenjual', 0);
        } else if (window.localStorage.getItem('isLoggedInAsPembeli') == '1') {
            userprofile[i].setAttribute('href', 'profilpengguna.html');
        } else if (window.localStorage.getItem('isLoggedInAsPenjual') == '1') {
            userprofile[i].setAttribute('href', 'daftarproduk.html')
        }
    } else {
        break;
    }
}

function setLogin() {
    if (window.localStorage.getItem('loginAsPembeli') == '1') {
        window.localStorage.setItem('loginAsPembeli', 0);
        window.localStorage.setItem('loginAsPenjual', 1);
    } else if (window.localStorage.getItem('loginAsPenjual') == '1') {
        window.localStorage.setItem('loginAsPembeli', 1);
        window.localStorage.setItem('loginAsPenjual', 0);
    }

    if (pLoginSebagai != null) {
        if (window.localStorage.getItem('loginAsPembeli') == '1') {
            pLoginSebagai.innerHTML = 'Login sebagai penjual';
            titleLogin.innerHTML = 'Login (Pembeli)';
        } else if (window.localStorage.getItem('loginAsPenjual') == '1') {
            pLoginSebagai.innerHTML = 'Login sebagai pembeli';
            titleLogin.innerHTML = 'Login (Penjual)';
        }
    }
}

function login() {
    if (window.localStorage.getItem('loginAsPembeli') == '1') {
        if (inputEmail.value == 'pembeli' && inputPassword.value == 'pembeli') {
            window.localStorage.setItem('isLoggedInAsPembeli', 1);
            window.localStorage.setItem('isLoggedOut', 0);
            window.location = 'index.html';
        }
    } else if (window.localStorage.getItem('loginAsPenjual') == '1') {
        if (inputEmail.value == 'penjual' && inputPassword.value == 'penjual') {
            window.localStorage.setItem('isLoggedInAsPenjual', 1);
            window.localStorage.setItem('isLoggedOut', 0);
            window.location = 'index.html';
        }
    }
}

function logout() {
    window.localStorage.setItem('isLoggedInAsPembeli', 0);
    window.localStorage.setItem('isLoggedInAsPenjual', 0);
    window.localStorage.setItem('isLoggedOut', 1);
    window.location = 'index.html';
}

// Quotes Generator
const generateQuote = function() {
    const quotes = [
    {
        quote: "We choose our destiny in the way we treat others.",
        writer: "-Wit"
     },
     {
        quote: "No snowflake in an avalanche ever feels responsible.",
        writer: "-Voltaire"
     },
      {
        quote: "Fortune favours the brave.",
        writer: "-Virgil"
     },
     {
        quote: "I believe in one thing only, the power of human will.",
        writer: "-Joseph Stalin"
     },
     {
      quote: "The best way out is always through.",
        writer: "-Robert Frost"
     },
     {
        quote: "The mind unlearns with difficulty what it has long learned.",
        writer: "-Seneca"
    },
      {
        quote: "I destroy my enemies when I make them my friends.",
        writer: "-Abraham Lincoln"
     },
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        writer: "-Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love.",
        writer: "-Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
        writer: "-Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        writer: "-Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        writer: "-Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        writer: "-Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        writer: "-Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        writer: "-Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        writer: "-Dobby"
    }
];
    var arrIdx = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = '"'+quotes[arrIdx].quote+'"';
    document.getElementById("writer").innerHTML = quotes[arrIdx].writer;
}

window.onload = function() {
    generateQuote();
    setInterval(generateQuote, 10000);
}