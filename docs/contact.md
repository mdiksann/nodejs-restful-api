# Contact API Documentation

---

* **Authorization:** `token` (Required. Obtain this token from the login endpoint.)

---
### Create Contact

This endpoint allows you to **create a new contact** entry.

* **Endpoint:** `POST /api/contacts`
* **Request Body:**

    ```json
    {
      "first_name": "Iksan",
      "last_name": "Praditya",
      "email": "iksan@gmail.com",
      "phone": "00882224400"
    }
    ```

* **Successful Response (Status: 201 Created):**

    ```json
    {
      "data": {
        "id": 1,
        "first_name": "Iksan",
        "last_name": "Praditya",
        "email": "iksan@gmail.com",
        "phone": "00882224400"
      }
    }
    ```

* **Error Response (Status: 400 Bad Request):**

    ```json
    {
      "errors": "Email is not valid format"
    }
    ```

---
### Update Contact

Use this endpoint to **update an existing contact** by its ID.

* **Endpoint:** `PUT /api/contacts/:id`
* **Request Body:**

    ```json
    {
      "first_name": "Iksan",
      "last_name": "Praditya",
      "email": "iksan@gmail.com",
      "phone": "00882224400"
    }
    ```

* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": {
        "id": 1,
        "first_name": "Iksan",
        "last_name": "Praditya",
        "email": "iksan@gmail.com",
        "phone": "00882224400"
      }
    }
    ```

* **Error Response (Status: 400 Bad Request):**

    ```json
    {
      "errors": "Email is not valid format"
    }
    ```

---
### Get Contact

Retrieve the **details of a specific contact** by its ID.

* **Endpoint:** `GET /api/contacts/:id`
* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": {
        "id": 1,
        "first_name": "Iksan",
        "last_name": "Praditya",
        "email": "iksan@gmail.com",
        "phone": "00882224400"
      }
    }
    ```

* **Error Response (Status: 404 Not Found):**

    ```json
    {
      "errors": "Contact is not found"
    }
    ```

---
### Search Contacts

This endpoint allows you to **search for contacts** based on various criteria and supports pagination.

* **Endpoint:** `GET /api/contacts`
* **Query Parameters (Optional):**
    * `name`: Search by **first name or last name** (uses a LIKE comparison).
    * `email`: Search by **email** (uses a LIKE comparison).
    * `phone`: Search by **phone number** (uses a LIKE comparison).
    * `page`: The **page number** to retrieve (default: 1).
    * `size`: The **number of items per page** (default: 10).
* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": [
        {
          "id": 1,
          "first_name": "Iksan",
          "last_name": "Praditya",
          "email": "iksan@gmail.com",
          "phone": "00882224400"
        },
        {
          "id": 2,
          "first_name": "Iksan",
          "last_name": "Praditya",
          "email": "iksan@gmail.com",
          "phone": "00882224400"
        }
      ],
      "paging": {
        "page": 1,
        "total_page": 3,
        "total_item": 30
      }
    }
    ```

---
### Delete Contact

This endpoint allows you to **delete a contact** by its ID.

* **Endpoint:** `DELETE /api/contacts/:id`
* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": "OK"
    }
    ```

* **Error Response (Status: 404 Not Found):**

    ```json
    {
      "errors": "Contact is not found"
    }
    ```