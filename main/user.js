class User {
    createUser(userDTO) {
        // h1
        const h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode('Uživatel'));

        // hr
        const hr = document.createElement('hr');
        hr.className += 'hrUser';

        // id
        const idText = document.createElement('span');
        idText.className += 'idProperty';
        idText.appendChild(document.createTextNode(`${window.localStorage.getItem('id')}`));
        const id = document.createElement('p');
        id.appendChild(document.createTextNode(`ID: `));
        id.appendChild(idText);

        // firstName
        const firstNameText = document.createElement('b');
        firstNameText.appendChild(document.createTextNode(`${userDTO.firstName}`));
        const firstName = document.createElement('p');
        firstName.appendChild(document.createTextNode(`Jméno: `));
        firstName.appendChild(firstNameText);

        // lastName
        const lastNameText = document.createElement('b');
        lastNameText.appendChild(document.createTextNode(`${userDTO.lastName}`));
        const lastName = document.createElement('p');
        lastName.appendChild(document.createTextNode(`Příjmení: `));
        lastName.appendChild(lastNameText);

        // email
        const emailText = document.createElement('b');
        emailText.appendChild(document.createTextNode(`${userDTO.email}`));
        const email = document.createElement('p');
        email.appendChild(document.createTextNode(`E-mail: `));
        email.appendChild(emailText);

        //serverStatus
        const serverStatus = document.createElement('p');
        serverStatus.appendChild(document.createTextNode('Připojení k serveru: ON'));

        // item
        const item = document.createElement('div');
        item.id = 'user';
        item.className += 'item';
        item.appendChild(h1);
        item.appendChild(hr);
        item.appendChild(id);
        item.appendChild(firstName);
        item.appendChild(lastName);
        item.appendChild(email);
        item.appendChild(serverStatus);
        
        // column
        const col = document.getElementById('column1');
        col.appendChild(item);
    }
}