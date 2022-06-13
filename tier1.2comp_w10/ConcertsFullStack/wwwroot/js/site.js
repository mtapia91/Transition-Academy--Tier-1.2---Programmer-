const uri = 'api/concertsfullstack';
let concerts = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
    const addDateTextbox = document.getElementById('add-date');
    const addPriceTextbox = document.getElementById('add-price');
    const addArtistTextbox = document.getElementById('add-artist');

    const item = {
        date: addDateTextbox.value.trim(),
        price: addPriceTextbox.value.trim(),
        artist: addArtistTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addDateTextbox.value = '';
            addPriceTextbox.value = '';
            addArtistTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem() {
    const id = document.getElementById('delete').value;
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(id) {
    const item = concerts.find(item => item.id === id);

    document.getElementById('edit-id').value = item.id;
    document.getElementById('update-date').value = item.date;
    document.getElementById('update-price').value = item.price;
    document.getElementById('update-artist').value = item.artist;
    document.getElementById('updateForm').style.display = 'block';
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;

    const item = {
        id: parseInt(itemId),
        date: document.getElementById('update-date').value.trim(),
        price: document.getElementById('update-price').value.trim(),
        artist: document.getElementById('update-artist').value.trim(),
    };

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    closeInput();

    return false;

    /*=================*/

    //const itemId = document.getElementById(id).value;
    //const item = {
    //    id: parseInt(itemId, 10),
    //    date: document.getElementById('update-date').value.trim(),
    //    price: document.getElementById('update-price').value.trim(),
    //    artist: document.getElementById('update-artist').value.trim()
    //};

    //fetch(`${uri}/${itemId}`, {
    //    method: 'PUT',
    //    headers: {
    //        'Accept': 'application/json',
    //        'Content-Type': 'application/json'
    //    },
    //    body: JSON.stringify(item)
    //})
    //    .then(() => getItems())
    //    .catch(error => console.error('Unable to update item.', error));

    //closeInput();

    //return false;
}

function closeInput() {
    document.getElementById('updateForm').style.display = 'none';
    console.log ('Your concert has been udpated!')
}

function _displayCount(itemCount) {
    const artist = (itemCount === 1) ? 'concert' : 'concerts';

    document.getElementById('counter').innerText = `${itemCount} ${artist}`;
}

function _displayItems(data) {  
    const tBody = document.getElementById('concerts');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Update';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let tr = tBody.insertRow();

        let td = tr.insertCell(0);
        let textNode = document.createTextNode(item.id);
        td.appendChild(textNode);

        let td1 = tr.insertCell(1);
        let textNode1 = document.createTextNode(item.date);
        td1.appendChild(textNode1);

        let td2 = tr.insertCell(2);
        let textNode2 = document.createTextNode(item.price);
        td2.appendChild(textNode2);

        let td3 = tr.insertCell(3);
        let textNode3 = document.createTextNode(item.artist);
        td3.appendChild(textNode3);

        let td4 = tr.insertCell(4);
        td4.appendChild(editButton);
    });

    concerts = data;
}