class Station {
    createStation(stationDTO, column) {
        // Variables
        const col = document.getElementById(column);
        const item = document.createElement('div');
        item.className += 'item';
        const h1 = document.createElement('h1');
        const hr1 = document.createElement('hr');
        const id = document.createElement('p');
        const idText = document.createElement('span');
        idText.className += 'idProperty';
        const type = document.createElement('p');
        const typeText = document.createElement('b');
        // Location
        const location = document.createElement('p');
        const locationText = document.createElement('b');
        const locationDiv = document.createElement('div');
        locationDiv.id = 'locationDiv';
        locationDiv.className += 'subField';
        const lat = document.createElement('p');
        lat.className += 'subFieldProperty';
        const br1 = document.createElement('br');
        const latText = document.createElement('b');
        const lng = document.createElement('p');
        lng.className += 'subFieldProperty';
        const br2 = document.createElement('br');
        const lngText = document.createElement('b');
        // Activity
        const activity = document.createElement('p');
        const activityText = document.createElement('b');
        const activityDiv = document.createElement('div');
        activityDiv.id = 'activityDiv';
        activityDiv.className += 'subField';
        const since = document.createElement('p');
        since.className += 'subFieldProperty';
        const br3 = document.createElement('br');
        const sinceText = document.createElement('b');
        const lastStart = document.createElement('p');
        lastStart.className += 'subFieldProperty';
        const br4 = document.createElement('br');
        const lastStartText = document.createElement('b');
        const lastEnd = document.createElement('p');
        lastEnd.className += 'subFieldProperty';
        const br5 = document.createElement('br');
        const lastEndText = document.createElement('b');
        // Data
        const data = document.createElement('p');
        const dataText = document.createElement('b');
        const dataDiv = document.createElement('div');
        dataDiv.className += 'subField';

        // Inserting data
        idText.appendChild(document.createTextNode(stationDTO._id));
        typeText.appendChild(document.createTextNode(stationDTO.type));
        // Location
        locationText.appendChild(document.createTextNode('Lokace'));
        latText.appendChild(document.createTextNode(stationDTO.location.lat));
        lngText.appendChild(document.createTextNode(stationDTO.location.lng));
        // Activity
        activityText.appendChild(document.createTextNode('Aktivita'));
        sinceText.appendChild(document.createTextNode(this.timeFormat(stationDTO.activity.since)));
        lastStartText.appendChild(document.createTextNode(this.timeFormat(stationDTO.activity.lastStart)));
        if (lastEnd === 0) {
            lastEndText.appendChild(document.createTextNode('Stále v provozu'));
        } else {
            lastEndText.appendChild(document.createTextNode(this.timeFormat(stationDTO.activity.lastEnd)));
        }
        // Data
        dataText.appendChild(document.createTextNode('Data'));

        // Inserting text
        h1.appendChild(document.createTextNode(stationDTO.name));
        id.appendChild(document.createTextNode('ID: '));
        id.appendChild(idText);
        type.appendChild(document.createTextNode('Typ: '));
        type.appendChild(typeText);
        // Location
        location.appendChild(locationText);
        lat.appendChild(document.createTextNode('Zeměpisná šířka: '));
        lat.appendChild(br1);
        lat.appendChild(latText);
        lng.appendChild(document.createTextNode('Zeměpisná délka: '));
        lng.appendChild(br2);
        lng.appendChild(lngText);
        locationDiv.appendChild(lat);
        locationDiv.appendChild(lng);
        // Activity
        activity.appendChild(activityText);
        since.appendChild(document.createTextNode('Spuštění: '));
        since.appendChild(br3);
        since.appendChild(sinceText);
        lastStart.appendChild(document.createTextNode('Naposledy od: '));
        lastStart.appendChild(br4);
        lastStart.appendChild(lastStartText)
        lastEnd.appendChild(document.createTextNode('Naposledy do: '));
        lastEnd.appendChild(br5);
        lastEnd.appendChild(lastEndText);
        activityDiv.appendChild(since);
        activityDiv.appendChild(lastStart);
        activityDiv.appendChild(lastEnd);
        // Data
        data.appendChild(dataText);

        // Final insert to grid item
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
        col.appendChild(item);
    }

    timeFormat(UNIXTimestamp) {
        const date = new Date(UNIXTimestamp);
        const months = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
    }
}