function login() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/v1/user/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            const res = JSON.parse(xhr.response);
            if (xhr.status == 200) {
                window.localStorage.setItem('id', res.id);
                window.localStorage.setItem('token', res.token);
                window.open('./main/main.html', '_self');
            } else {
                alert(res.message);
            }
        }
    }
    xhr.send(JSON.stringify({
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }));
}