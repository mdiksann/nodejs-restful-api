# Address API Documentation

---

* **Authorization:** `token` (Required. Obtain this token from the login endpoint.)

---
### Create Address

This endpoint allows you to **create a new address** for a specific contact.

* **Endpoint:** `POST /api/contacts/:contactId/addresses`
* **Path Parameters:**
    * `:contactId`: The ID of the contact to which the address will be added.
* **Request Body:**

    ```json
    {
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "Kode pos"
    }
    ```

* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": {
        "id": 1,
        "street": "Jalan apa",
        "city": "Kota apa",
        "province": "Provinsi apa",
        "country": "Negara apa",
        "postal_code": "Kode pos"
      }
    }
    ```

* **Error Response (Status: 400 Bad Request):**

    ```json
    {
      "errors": "Country is required"
    }
    ```

---
### Update Address

Use this endpoint to **update an existing address** for a specific contact.

* **Endpoint:** `PUT /api/contacts/:contactId/addresses/:addressId`
* **Path Parameters:**
    * `:contactId`: The ID of the contact whose address is being updated.
    * `:addressId`: The ID of the address to update.
* **Request Body:**

    ```json
    {
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "Kode pos"
    }
    ```

* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": {
        "id": 1,
        "street": "Jalan apa",
        "city": "Kota apa",
        "province": "Provinsi apa",
        "country": "Negara apa",
        "postal_code": "Kode pos"
      }
    }
    ```

* **Error Response (Status: 400 Bad Request):**

    ```json
    {
      "errors": "Country is required"
    }
    ```

---
### Get Address

Retrieve the **details of a specific address** for a given contact.

* **Endpoint:** `GET /api/contacts/:contactId/addresses/:addressId`
* **Path Parameters:**
    * `:contactId`: The ID of the contact associated with the address.
    * `:addressId`: The ID of the address to retrieve.
* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": {
        "id": 1,
        "street": "Jalan apa",
        "city": "Kota apa",
        "province": "Provinsi apa",
        "country": "Negara apa",
        "postal_code": "Kode pos"
      }
    }
    ```

* **Error Response (Status: 404 Not Found):**

    ```json
    {
      "errors": "contact is not found"
    }
    ```

---
### List Addresses

This endpoint allows you to **list all addresses** associated with a specific contact.

* **Endpoint:** `GET /api/contacts/:contactId/addresses`
* **Path Parameters:**
    * `:contactId`: The ID of the contact whose addresses you want to list.
* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": [
        {
          "id": 1,
          "street": "Jalan apa",
          "city": "Kota apa",
          "province": "Provinsi apa",
          "country": "Negara apa",
          "postal_code": "Kode pos"
        },
        {
          "id": 1,
          "street": "Jalan apa",
          "city": "Kota apa",
          "province": "Provinsi apa",
          "country": "Negara apa",
          "postal_code": "Kode pos"
        }
      ]
    }
    ```

* **Error Response (Status: 404 Not Found):**

    ```json
    {
      "errors": "contact is not found"
    }
    ```

---
### Remove Address

This endpoint allows you to **delete a specific address** for a given contact.

* **Endpoint:** `DELETE /api/contacts/:contactId/addresses/:addressId`
* **Path Parameters:**
    * `:contactId`: The ID of the contact associated with the address.
    * `:addressId`: The ID of the address to remove.
* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": "OK"
    }
    ```

* **Error Response (Status: 404 Not Found):**

    ```json
    {
      "errors": "address is not found"
    }
    ```