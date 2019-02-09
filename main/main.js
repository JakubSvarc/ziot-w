const getUser = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/v1/user/get', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            const res = JSON.parse(xhr.response);
            if (xhr.status == 200) {
                console.log(res);
                resolve(res);
            } else {
                reject(alert(res.message));
            }
        }
    }
    const id = window.localStorage.getItem('id');
    const token = window.localStorage.getItem('token');
    console.log(id);
    console.log(token);
    xhr.send(JSON.stringify({
        id: id,
        token: token,
    }));
});

const getStations = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/api/v1/station/get/many', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            const res = JSON.parse(xhr.response);
            if (xhr.status == 200) {
                console.log(res);
                resolve(res);
            } else {
                reject(alert(res.message));
            }
        }
    }
    const id = window.localStorage.getItem('id');
    const token = window.localStorage.getItem('token');
    console.log(id);
    console.log(token);
    xhr.send(JSON.stringify({
        id: id,
        token: token,
    }));
});

async function run() {
    const user = await getUser;
    const stations = await getStations;
    console.log(stations.length);
    if (stations.length === 1) {
        for (grid of document.getElementsByClassName('grid')) {
            grid.style.gridTemplateColumns = 'auto auto';
        }
    }
}

window.onload = run;