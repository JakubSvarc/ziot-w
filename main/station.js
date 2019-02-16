class Station {
    createStation(stationDTO, stationNumber, column) {
        // h1
        const h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(stationDTO.name));

        // hr
        const hr1 = document.createElement('hr');

        // id
        const idText = document.createElement('span');
        idText.className += 'idProperty ';
        idText.appendChild(document.createTextNode(stationDTO._id));
        const id = document.createElement('p');
        id.appendChild(document.createTextNode('ID: '));
        id.appendChild(idText);

        // type
        const typeText = document.createElement('b');
        typeText.appendChild(document.createTextNode(stationDTO.type));
        const type = document.createElement('p');
        type.appendChild(document.createTextNode('Typ: '));
        type.appendChild(typeText);

        // location
        const locationText = document.createElement('b');
        locationText.appendChild(document.createTextNode('Lokace '));
        const locationButton = document.createElement('span');
        locationButton.id = `locationButton${stationNumber}`;
        locationButton.className += 'showButton ';
        locationButton.appendChild(document.createTextNode('\u25bc'));
        const location = document.createElement('p');
        location.appendChild(locationText);
        location.appendChild(locationButton);

        const br1 = document.createElement('br');
        const latText = document.createElement('b');
        latText.appendChild(document.createTextNode(stationDTO.location.lat));
        const lat = document.createElement('p');
        lat.className += 'subFieldProperty ';
        lat.appendChild(document.createTextNode('Zeměpisná šířka: '));
        lat.appendChild(br1);
        lat.appendChild(latText);

        const br2 = document.createElement('br');
        const lngText = document.createElement('b');
        lngText.appendChild(document.createTextNode(stationDTO.location.lng));
        const lng = document.createElement('p');
        lng.className += 'subFieldProperty ';
        lng.appendChild(document.createTextNode('Zeměpisná délka: '));
        lng.appendChild(br2);
        lng.appendChild(lngText);

        const locationDiv = document.createElement('div');
        locationDiv.id = `locationDiv${stationNumber}`;
        locationDiv.className += 'subField ';
        locationDiv.style.display = 'none';
        locationDiv.appendChild(lat);
        locationDiv.appendChild(lng);

        // activity
        const activityText = document.createElement('b');
        activityText.appendChild(document.createTextNode('Aktivita'));
        const activityButton = document.createElement('span');
        activityButton.id = `activityButton${stationNumber}`;
        activityButton.className += 'showButton ';
        activityButton.appendChild(document.createTextNode('\u25bc'));
        const activity = document.createElement('p');
        activity.appendChild(activityText);
        activity.appendChild(activityButton);

        const br3 = document.createElement('br');
        const sinceText = document.createElement('b');
        sinceText.appendChild(document.createTextNode(this.timeFormat(stationDTO.activity.since)));
        const since = document.createElement('p');
        since.className += 'subFieldProperty ';
        since.appendChild(document.createTextNode('Spuštění: '));
        since.appendChild(br3);
        since.appendChild(sinceText);

        const br4 = document.createElement('br');
        const lastStartText = document.createElement('b');
        lastStartText.appendChild(document.createTextNode(this.timeFormat(stationDTO.activity.lastStart)));
        const lastStart = document.createElement('p');
        lastStart.className += 'subFieldProperty ';
        lastStart.appendChild(document.createTextNode('Naposledy od: '));
        lastStart.appendChild(br4);
        lastStart.appendChild(lastStartText)

        const br5 = document.createElement('br');
        const lastEndText = document.createElement('b');
        const lastEnd = document.createElement('p');
        lastEnd.className += 'subFieldProperty ';
        if (lastEnd === 0) {
            lastEndText.appendChild(document.createTextNode('Stále v provozu'));
        } else {
            lastEndText.appendChild(document.createTextNode(this.timeFormat(stationDTO.activity.lastEnd)));
        }
        lastEnd.appendChild(document.createTextNode('Naposledy do: '));
        lastEnd.appendChild(br5);
        lastEnd.appendChild(lastEndText);
        
        const activityDiv = document.createElement('div');
        activityDiv.id = `activityDiv${stationNumber}`;
        activityDiv.className += 'subField ';
        activityDiv.style.display = 'none';
        activityDiv.appendChild(since);
        activityDiv.appendChild(lastStart);
        activityDiv.appendChild(lastEnd);

        // data
        const dataText = document.createElement('b');
        dataText.appendChild(document.createTextNode('Data'));

        const data = document.createElement('p');
        data.appendChild(dataText);

        const dataDiv = document.createElement('div');
        dataDiv.className += 'subField';

        // item
        const item = document.createElement('div');
        item.className += 'item';
        item.appendChild(h1);
        item.appendChild(hr1);
        item.appendChild(id);
        item.appendChild(type);
        item.appendChild(location);
        item.appendChild(locationDiv);
        item.appendChild(activity);
        item.appendChild(activityDiv);
        item.appendChild(data);
        item.appendChild(dataDiv);

        // column
        const col = document.getElementById(column);
        col.appendChild(item);

        // show/hide click function
        document.getElementById(`locationButton${stationNumber}`).onclick = function() {
            Station.showHide(`locationDiv${stationNumber}`, `locationButton${stationNumber}`);
        }
        document.getElementById(`activityButton${stationNumber}`).onclick = function() {
            Station.showHide(`activityDiv${stationNumber}`, `activityButton${stationNumber}`);
        }
    }

    timeFormat(UNIXTimestamp) {
        const date = new Date(UNIXTimestamp);
        const months = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    static showHide(divName, buttonName) {
        const div = document.getElementById(divName);
        let buttonClasses = document.getElementById(buttonName).className;
        if (div.style.display == 'none') {
            document.getElementById(buttonName).className = buttonClasses.replace('rotateBack ', '');
            document.getElementById(buttonName).className += 'rotate ';
            div.style.display = 'block';
        } else {
            document.getElementById(buttonName).className = buttonClasses.replace('rotate ', '');
            document.getElementById(buttonName).className += 'rotateBack ';
            div.style.display = 'none';
        }
    };
}