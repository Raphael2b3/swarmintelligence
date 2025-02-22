The auth Service is a service that implements following interface

# Authentication API - Test & Implementation Guide

This repository contains a **test suite (`test_auth_api.py`)** to verify an authentication API implementation.  
Your API should provide the required endpoints and behavior to pass the tests.

## 📌 API Requirements

Your API must implement the following **REST endpoints** with the specified HTTP methods:

| **Endpoint**        | **Method** | **Description**                                   | **Expected Response**         |
| ------------------- | ---------- | ------------------------------------------------- | ----------------------------- |
| `/register`         | `POST`     | Register a user (`id`, `password`)                | `{ "token": "..." }`          |
| `/login`            | `POST`     | Login a user (`id`, `password`)                   | `{ "token": "..." }`          |
| `/logout`           | `POST`     | Logout a user (`Authorization: token`)            | `{ "message": "OK" }`         |
| `/verify_access`    | `GET`      | Verify access token (`Authorization: token`)      | `{ "hasAccess": true/false }` |
| `/user_data`        | `GET`      | Retrieve user data (`Authorization: token`)       | `{ "data": { ... } }`         |
| `/update_user_data` | `PUT`      | Update user data (`Authorization: token`, `data`) | `{ "message": "OK" }`         |
| `/verify_user`      | `GET`      | Verify user existence (`Authorization: token`)    | `{ "verified": true/false }`  |
| `/refresh`          | `POST`     | Refresh access token (`Authorization: token`)     | `{ "token": "..." }`          |
| `/unregister`       | `DELETE`   | Delete user account (`Authorization: token`)      | `{ "message": "OK" }`         |
| `/password_reset`   | `POST`     | Request password reset (`id`)                     | `{ "message": "OK" }`         |

## 🔧 API Expectations

- The API should use **JSON** for both requests and responses.
- Protected endpoints require an **`Authorization` header** with a valid token.
- Tokens can be **JWT-based** or another authentication method.

---

## 🧪 Running Tests with `pytest`

### 1️⃣ **Install Dependencies**

If `pytest` and `requests` are not installed, install them using:

```sh
pip install pytest requests
```
