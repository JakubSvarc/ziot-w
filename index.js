function login() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/v1/user/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const res = JSON.parse(xhr.response);
                window.localStorage.setItem('id', res.id);
                window.localStorage.setItem('token', res.token);
                window.open('./main/main.html', '_self');
            } else if (xhr.response) {
                const res = JSON.parse(xhr.response);
                alert(res.message);
            } else {
                window.open('./error/error.html', '_self');
            }
        }
    }
    xhr.send(JSON.stringify({
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }));
}

function footerPosition() {
    if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
        document.getElementById('footer').style.position = 'absolute';
    } else {
        document.getElementById('footer').style.position = 'relative';
    }
}

async function run() {
    if (window.localStorage.getItem('id') && window.localStorage.getItem('token')) {
        window.open('./main/main.html', '_self');
    }
    footerPosition()
}

window.onload = run;