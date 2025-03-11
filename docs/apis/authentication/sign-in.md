# Sign In

## Sequence Diagram

![image info](./assets/sign-in.png)

---

## User Sign In

Used to collect a Token for a registered User.

**URL:** `/api/v1/authentication/sign-in/`

**Method:** `POST`

**Auth required:** NO

**Request Data constraints**

```json
{
  "email": "[valid email address]",
  "password": "[password in plain text]"
}
```

**Request Data example**

```json
{
  "email": "iloveauth@example.com",
  "password": "Example123!@#"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Error Response

**Condition:** If 'email' and 'password' is wrong.

**Code:** `400 BAD REQUEST`

**Content:**

```json
{
  "errors": [
    {
      "param": "common",
      "msg": "Something went wrong during the authentication process. Please try signing in again."
    }
  ]
}
```
