class User {
    createUser(userDTO) {
        // constiables
        const col = document.getElementById('column1');
        const item = document.createElement('div');
        item.className += 'item';
        const h1 = document.createElement('h1');
        const hr = document.createElement('hr');
        const id = document.createElement('p');
        const idText = document.createElement('span');
        idText.className += 'idProperty';
        const firstName = document.createElement('p');
        const firstNameText = document.createElement('b');
        const lastName = document.createElement('p');
        const lastNameText = document.createElement('b');
        const email = document.createElement('p');
        const emailText = document.createElement('b');
        const serverStatus = document.createElement('p');

        // Inserting data
        idText.appendChild(document.createTextNode(`${window.localStorage.getItem('id')}`));
        firstNameText.appendChild(document.createTextNode(`${userDTO.firstName}`));
        lastNameText.appendChild(document.createTextNode(`${userDTO.lastName}`));
        emailText.appendChild(document.createTextNode(`${userDTO.email}`));

        // Inserting text
        h1.appendChild(document.createTextNode('Uživatel'));
        id.appendChild(document.createTextNode(`ID: `));
        id.appendChild(idText);
        firstName.appendChild(document.createTextNode(`Jméno: `));
        firstName.appendChild(firstNameText);
        lastName.appendChild(document.createTextNode(`Příjmení: `));
        lastName.appendChild(lastNameText);
        email.appendChild(document.createTextNode(`E-mail: `));
        email.appendChild(emailText);
        serverStatus.appendChild(document.createTextNode('Připojení k serveru: ON'));
        
        // Final insert to grid item
        item.appendChild(h1);
        item.appendChild(hr);
        item.appendChild(id);
        item.appendChild(firstName);
        item.appendChild(lastName);
        item.appendChild(email);
        item.appendChild(serverStatus);
        col.appendChild(item);
    }
}