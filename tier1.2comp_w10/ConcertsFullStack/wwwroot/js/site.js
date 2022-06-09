const uri = 'api/concertsfullstack';
let concerts = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {

    const addDateTextBox = document.getElementById('add-date');
    const addPriceTextBox = document.getElementById('add-price');
    const addArtistTextbox = document.getElementById('add-artist');

    const date= {
        dateItem: addDateTextBox.value.trim(),
    }
    const price= {
        priceItem: addPriceTextBox.value.trim(),
    }
    const artist= {
        artistItem: addArtistTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(date, price, artist)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addDateTextBox.value = '';
            addPriceTextBox.value = '';
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
    document.getElementById('edit-date').value = item.date;
    document.getElementById('edit-price').value = item.price;
    document.getElementById('edit-artist').value = item.artist;
    document.getElementById('updateForm').style.display = 'block';
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        date: document.getElementById('edit-date').value.trim(),
        price: document.getElementById('edit-price').value.trim(),
        artist: document.getElementById('edit-artist').value.trim(),
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
}

function closeInput() {
    document.getElementById('updateForm').style.display = 'none';
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

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let labelRow = tBody.insertRow();
        let idLabel = labelRow.insertCell(0);
        let dateLabel = labelRow.insertCell(1);
        let priceLabel = labelRow.insertCell(2);
        let artistLabel = labelRow.insertCell(3);

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

        let td5 = tr.insertCell(5);
        td5.appendChild(deleteButton);
    });

    concerts = data;
}