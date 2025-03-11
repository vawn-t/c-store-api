# Sign Up

## Sequence Diagram

![image info](./assets/sign-up.png)

---

## User Sign Up

Used to collect a Token for a registered User.

**URL:** `/api/v1/authentication/sign-up/`

**Method:** `POST`

**Auth required:** NO

**Request Data constraints**

```json
{
  "email": "[valid email address]",
  "password": "[password in plain text]",
  "phone": "[valid phone number]"
}
```

**Request Data example**

```json
{
  "email": "iloveauth@example.com",
  "password": "Example123!@#",
  "phone": "+84918364535"
}
```

## Success Response

**Code:** `201 CREATED`

**Content example**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Error Response

**Condition:** If 'email' or 'phone' is already registered.

**Code:** `409 CONFLICT`

**Content:**

```json
{
  "errors": [
    {
      "param": "email",
      "msg": "Email already registered",
      "location": "body"
    },
    {
      "param": "phone",
      "msg": "Phone Number already registered",
      "location": "body"
    }
  ]
}
```
