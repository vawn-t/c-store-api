# User's Profile

## Sequence Diagram

![image info](./assets/profile.png)

---

## Get User Profile

_Used to get user profile_

**URL:** `/api/v1/users/:userId/profile/`

**Method:** `GET`

**Auth required:** YES

**HTTP Headers constraints**

```json
{
  "authorization": "JWT [valid token]"
}
```

**HTTP Headers example**

```json
{
  "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "id": 1,
  "email": "oliviaaustin@gmail.com",
  "image": "https://via.placeholder.com/150",
  "name": "Olivia Austin",
  "phone": "+84918364535"
}
```

---

## Update User's Profile

_Used to update user profile_

**URL:** `/api/v1/users/:userId/profile/`

**Method:** `PATCH`

**Auth required:** YES

**HTTP Headers constraints**

```json
{
  "authorization": "JWT [valid token]"
}
```

**HTTP Headers example**

```json
{
  "authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

**Request Data constraints**

```json
{
  "email": "[valid email address]",
  "name": "[name in plain text]",
  "phone": "[valid phone number]"
}
```

**Request Data example**

```json
{
  "email": "russell.partner@gmail.com",
  "name": "Russell Austin",
  "phone": "+84918364535"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{
  "id": 1,
  "email": "russell.partner@gmail.com",
  "name": "Russell Austin",
  "phone": "+84918364535"
}
```

## Error Response

**Condition:** If a new inputted email is used by another

**Code:** `409 CONFLICT`

**Content:**

```json
{
  "errors": [
    "The user already exits by this email",
    "Phone number is already registered by another"
  ]
}
```
