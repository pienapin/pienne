let pLoginSebagai = document.getElementById('ploginSebagai');
let userprofile = document.getElementById('userProfile');
let inputEmail = document.getElementById('email');
let inputPassword = document.getElementById('password');

if (userprofile != null) {
    if (window.localStorage.getItem('isLoggedOut') == '1') {
        userprofile.setAttribute('href', 'login.html');
        window.localStorage.setItem('isLoggedOut', 1);
        window.localStorage.setItem('isLoggedInAsPembeli', 0);
        window.localStorage.setItem('isLoggedInAsPenjual', 0);
        window.localStorage.setItem('loginAsPembeli', 1);
        window.localStorage.setItem('loginAsPenjual', 0);
    } else if (window.localStorage.getItem('isLoggedInAsPembeli') == '1') {
        userprofile.setAttribute('href', '#');
    } else if (window.localStorage.getItem('isLoggedInAsPenjual') == '1') {
        userprofile.setAttribute('href', 'daftarproduk.html')
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
        } else if (window.localStorage.getItem('loginAsPenjual') == '1') {
            pLoginSebagai.innerHTML = 'Login sebagai pembeli';
        }
    }
}

function login() {
    if (window.localStorage.getItem('loginAsPembeli') == '1') {
        if (inputEmail.value == 'pembeli' && inputPassword.value == 'pembeli123') {
            window.localStorage.setItem('isLoggedInAsPembeli', 1);
            window.localStorage.setItem('isLoggedOut', 0);
            window.location = 'index.html';
        }
    } else if (window.localStorage.getItem('loginAsPenjual') == '1') {
        if (inputEmail.value == 'penjual' && inputPassword.value == 'penjual123') {
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