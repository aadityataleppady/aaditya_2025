---
layout: post
title: Sprint 5 Reflection
description: Sprint 5 Reflection
permalink: /posts/Sprint_5_Reflection/
comments: True
---

<h2>Intro to Requests</h2>

<h3>Purpose of Groups Program:</h3>

The purpose of our program (called InterTravel) is to create a social media platform where users can plan for their trip to five different cities, Paris, London, New York, Hong Kong, and Mumbai. Users can use many different detailed tools that offer insight to various elements of planning a vacation, such as activities, food options, hotels, transportation, budget, packing, and healthcare. These features will allow the user to make proper and informed decisions on planning their trip.

<h3>Purpose of individual feature (Packing Portal):</h3>

Packing Portal is designed to provide users with helpful packing recommendations for their travel destination. It suggests items to pack based on the city they plan to visit and allows users to save their selected items in a personal packing checklist. Through the checklist, users can edit, delete, or review their saved items at any time. Additionally, Packing Portal includes weather information for the destination, making it easier to decide what to bring and what to leave behind.

<h2>List Requests</h2>

<h3>Formatting response data</h3>

```
const data = await response.json();

const checklistArea = document.getElementById('checklist_area');

checklistArea.innerHTML = '';

data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'checklist-item';

    const name_span = document.createElement('span');
    name_span.textContent = item.item;
    
    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        enableEditing(item, listItem, name_span, editButton);
    });
    
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        deletePackingChecklist(item.id);
        listItem.remove();
    });

    listItem.appendChild(name_span);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    checklistArea.appendChild(listItem);
});
```

```const data = await response.json();```

- Converts the API response into a JavaScript object (JSON format) and assigns it to data.

```
const checklistArea = document.getElementById('checklist_area');
checklistArea.innerHTML = '';
```

- Gets the DOM element with the ID of "checklist_area", and then clears any existing content in the "checklist_area" element.

```data.forEach(item => {```

- Iterates over each item in the data array

```
const listItem = document.createElement('li');
listItem.className = 'checklist-item';
```

- Creates a new ```<li>``` item to represent a checklist item, and assigns the class "checklist-item" to the new ```<li>``` (helpful for styling and to identify the item)

```
const name_span = document.createElement('span');
name_span.textContent = item.item;
```

- Creates a ```<span>``` element to display the item, and sets the text content of the ```<span>``` to the item name

```
const editButton = document.createElement('button');
editButton.className = 'edit-button';
editButton.textContent = 'Edit';
editButton.addEventListener('click', () => { enableEditing(item, listItem, name_span, editButton); });
```

- Creates an edit button, assigns its class, sets the button's text, and adds an event listener to the button, which triggers the enableEditing function

```
const removeButton = document.createElement('button');
removeButton.className = 'remove-button';
removeButton.textContent = 'Remove';
removeButton.addEventListener('click', () => { deletePackingChecklist(item.id); listItem.remove(); });
```

- Same thing as the edit button, but a "remove" button, and triggers the "deletePackingChecklist" function when clicked

```
listItem.appendChild(name_span);
listItem.appendChild(editButton);
listItem.appendChild(removeButton);
checklistArea.appendChild(listItem);
```

- Adds the ```<span>``` with the item name, the edit button, the remove button, and finally adds the constructed list to the checklist_area

<h3>Queries from Database to extract a Python List</h3>

```
def post(self):

    data = request.get_json()
    
    if not data or 'item' not in data:
        return {'message': 'Required information not entered'}, 400

    weather = Weather(
        user = data.get('user'),
        item = data.get('item')
    )

    try:
        weather.create()
        return jsonify(weather.read())
    except Exception as e:
        return {'message': f'Error saving information: {e}'}, 500
```

This is my ```post()``` function in my API, where I use the ```Weather``` class to create a new object, and assign the user and item columns. This allows the user and item to be added to the database.

<h3>Methods for CRUD</h3>

Here are my GET, DELETE, and PUT functions:

```
def get(self):
    
    weather_id = request.args.get('id')
    # weather_data = get_weather_data(lat, lon)

    if weather_id:
        weather = Weather.query.get(weather_id)
        
        if not weather:
            return {'message': 'Weather not found'}, 404
        return jsonify(weather)
    
    all_items = Weather.query.all()
    return jsonify([weather.read() for weather in all_items])
```
In my GET method, it gets each of the items from the ID, and it returns a JSON object of the items, allowing it to be read in the frontend.

```
def delete(self):

    data = request.get_json()

    if not data or 'id' not in data:
        return {'message': 'ID is required for deleting information'}, 400

    weather = Weather.query.get(data['id'])
    if not weather:
        return {'message': 'Information not found'}, 404

    try:
        weather.delete()
        return {'message': 'Information deleted successfully'}, 200
    except Exception as e:
        return {'message': f'Error deleting information: {e}'}, 500
```
In my DELETE method, it gets the item based off the ID. Then, it will delete the row from the database that corresponds to the ID.

```
def put(self):
    data = request.get_json()

    if not data or 'id' not in data:
        return {'message': 'ID is required for updating information'}, 400

    weather = Weather.query.get(data['id'])
    if not weather:
        return {'message': 'Information not found'}, 404

    try:
        weather.update(data)
        return jsonify(weather.read())
    except Exception as e:
        return {'message': f'Error updating information: {e}'}, 500
```

In my PUT method, it gets an item based off the ID. Then, it will update the row in the database based off of the information the user provides. For me, the data the user provides will be the name of the item, so it will get the JSON data and update the row.

<h2>Algorithmic Code Request</h2>

Here is my code block to perform the GET, POST, PUT, and DELETE methods:

```
class WeatherAPI:

    class _CRUD(Resource):
        def get(self):
            
            weather_id = request.args.get('id')
            # weather_data = get_weather_data(lat, lon)

            if weather_id:
                weather = Weather.query.get(weather_id)
                
                if not weather:
                    return {'message': 'Weather not found'}, 404
                return jsonify(weather)
            
            all_items = Weather.query.all()
            return jsonify([weather.read() for weather in all_items])
            
        def post(self):

            data = request.get_json()
            
            if not data or 'item' not in data:
                return {'message': 'Required information not entered'}, 400

            weather = Weather(
                user = data.get('user'),
                item = data.get('item')
            )

            try:
                weather.create()
                return jsonify(weather.read())
            except Exception as e:
                return {'message': f'Error saving information: {e}'}, 500

        def put(self):
            data = request.get_json()

            if not data or 'id' not in data:
                return {'message': 'ID is required for updating information'}, 400

            weather = Weather.query.get(data['id'])
            if not weather:
                return {'message': 'Information not found'}, 404

            try:
                weather.update(data)
                return jsonify(weather.read())
            except Exception as e:
                return {'message': f'Error updating information: {e}'}, 500

        def delete(self):

            data = request.get_json()

            if not data or 'id' not in data:
                return {'message': 'ID is required for deleting information'}, 400

            weather = Weather.query.get(data['id'])
            if not weather:
                return {'message': 'Information not found'}, 404

            try:
                weather.delete()
                return {'message': 'Information deleted successfully'}, 200
            except Exception as e:
                return {'message': f'Error deleting information: {e}'}, 500
```

- In my GET function, it gets the items based off of the ID. It uses selection through the if statements to check if the id exists, and it iterates through all the items when returning the data.
- In my POST function, it adds a new item to the database. It uses selection through the if statements to ensure that the item is provided.
- In my PUT function, it updates the database based off the ID. It uses selection through the if statements to check if the ID is present, since the ID is required for updating the database.
- In my DELETE function, it deletes a row in the database based off the ID. It uses selection through the if statements to check if the ID is present, since the ID is required for deleting a row the database.

<h2>Call to Algorithm Request</h2>

GET:
```
async function getPackingChecklists() {
    try {
        const response = await fetch(`http://127.0.0.1:8887/api/packing_checklists`, {});

        if (!response.ok) {
            throw new Error('Failed to fetch packing checklists: ' + response.statusText);
        }

        const data = await response.json();
    }
}
```

The ```getPackingChecklists``` method gets all of the items stored in the database. We do not need a body like in the other functions since we are only getting the items from the database. When a request is sent, the response should be a JSON object with the id, user, and item as listed in the database.

- Normal conditions: ```{"id": 1, "user": "toby", "item": "Snacks"}```
- Error conditions: ```{'message': 'Item not found'}```

POST:

```
async function postPackingChecklist(itemText) {
    const postData = {
        user: "toby",
        item: itemText
    };
    
    try {
        const response = await fetch(`http://127.0.0.1:8887/api/packing_checklists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error('Failed to add item: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Item added:', data);
    } catch (error) {
        console.error('Error adding item:', error);
        alert('Error adding item: ' + error.message);
    }
}
```

The ```postPackingChecklist``` method posts the user and item to the database. The postData dictionary has all the information, and a POST request is made with this dictionary. It fetches from the endpoint: ```http://127.0.0.1:8887/api/packing_checklists```.

- Normal conditions: ```{"id": 2, "user": "toby", "item": "Sunglasses"}```
- Error conditions: ```{"message": "User and item are required"}```

PUT:

```
async function putPackingChecklist(id, new_name) {
    
    const putData = {
        id: id,
        item: new_name
    }
    
    try {
        const response = await fetch(`http://127.0.0.1:8887/api/packing_checklists`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(putData)
        });

        if(!response.ok) {
            throw new Error('Failed to update item: ' + response.statusText);
        }

        const data = await response.json();
        console.log('Item updated:', data);
    } catch (error) {
        console.error('Error updating item:', error);
        alert('Error updating item: ' + error.message);
    }
}
```

The ```putPackingChecklist``` method updates a packing item. For example, a user can change the "Hat" to "Blue Hat." The method takes in the id and the updated item. The putData dictionary has the id and the new item, and a PUT request is made. It fetches from the endpoint: ```http://127.0.0.1:8887/api/packing_checklists```.

- Normal conditions: ```{"id": 2, "user": "toby", "item": "Cool Sunglasses"}```
- Error conditions: ```{'message': 'Item not found'}```

DELETE:

```
async function deletePackingChecklist(id) {

    const deleteData = {
        id: id,
    }

    try {
        const response = await fetch(`http://127.0.0.1:8887/api/packing_checklists`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deleteData)
        });

        if (!response.ok) {
            throw new Error('Failed to delete item: ' + response.statusText);
        }

        const data = await response.json();
    } catch (error) {
        console.error('Error deleting item:', error);
        alert('Error deleting item:' + error.message);
    }
}
```

The ```deletePackingChecklist``` method deletes an item from the database. It takes in the ID, which it uses to delete the row of the certain item. the deleteData function has the id of the item that will be deleted, and a DELETE request is made. It fetches from: ```http://127.0.0.1:8887/api/packing_checklists```.

- Normal conditions: ```{"message": "Information deleted successfully"}```
- Error conditions: ```{'message': 'Item not found'}```


