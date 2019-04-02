function authentication() {
    if (!window.localStorage.getItem('id') || !window.localStorage.getItem('token')) {
        window.open('../error/error.html', '_self');
    }
}

async function logout() {
    await new Promise(async (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/api/v1/user/logout', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 204) {
                    resolve();
                } else {
                    reject(() => {
                        window.open('../error/error.html', '_self')
                    });
                }
            }
        }
        await xhr.send(JSON.stringify({
            id: window.localStorage.getItem('id'),
            token: window.localStorage.getItem('token'),
        }));;
    });
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('token');
    window.open('../index.html', '_self')
}

function footerPosition() {
    if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
        document.getElementById('footer').style.position = 'absolute';
    } else {
        document.getElementById('footer').style.position = 'relative';
    }
}