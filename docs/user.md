## User API Documentation

---
### Register User

This endpoint allows you to **register a new user account**.

* **Endpoint:** `POST /api/users`
* **Request Body:**

    ```json
    {
      "username": "ikinoru",
      "password": "helloworld",
      "name": "Iksan"
    }
    ```

* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": {
        "username": "ikinoru",
        "name": "Iksan"
      }
    }
    ```

* **Error Response (Status: 400 Bad Request):**

    ```json
    {
      "errors": "Username already registered"
    }
    ```

---
### Login User

Use this endpoint to **authenticate a user** and receive an authorization token.

* **Endpoint:** `POST /api/users/login`
* **Request Body:**

    ```json
    {
      "username": "ikinoru",
      "password": "Iksan"
    }
    ```

* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": {
        "token": "unique-token"
      }
    }
    ```

* **Error Response (Status: 401 Unauthorized):**

    ```json
    {
      "errors": "Username or password wrong"
    }
    ```

---
### Update User Profile

This endpoint allows you to **update the current user's profile information**. Both `name` and `password` fields are optional.

* **Endpoint:** `PATCH /api/users/current`
* **Headers:**
    * **Authorization:** `token` (Required. Obtain this token from the login endpoint.)
* **Request Body:**

    ```json
    {
      "name": "Iksan",         // Optional: New name for the user
      "password": "new password" // Optional: New password for the user
    }
    ```

* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": {
        "username": "ikinoru",
        "name": "Iksan aja"
      }
    }
    ```

* **Error Response (Status: 400 Bad Request):**

    ```json
    {
      "errors": "Name length max 100"
    }
    ```

---
### Get User Profile

Retrieve the **profile details of the currently authenticated user** using this endpoint.

* **Endpoint:** `GET /api/users/current`
* **Headers:**
    * **Authorization:** `token` (Required. Obtain this token from the login endpoint.)
* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": {
        "username": "ikinoru",
        "name": "Iksan"
      }
    }
    ```

* **Error Response (Status: 401 Unauthorized):**

    ```json
    {
      "errors": "Unauthorized"
    }
    ```

---
### Logout User

This endpoint **logs out the current authenticated user**, invalidating their token.

* **Endpoint:** `DELETE /api/users/logout`
* **Headers:**
    * **Authorization:** `token` (Required. Obtain this token from the login endpoint.)
* **Successful Response (Status: 200 OK):**

    ```json
    {
      "data": "OK"
    }
    ```

* **Error Response (Status: 401 Unauthorized):**

    ```json
    {
      "errors": "Unauthorized"
    }
    ```