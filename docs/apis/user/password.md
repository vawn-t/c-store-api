# User's Password

## Sequence Diagram

![image info](./assets/password.png)

---

## Update User's Password

_Used to update user password_

**URL:** `/api/v1/users/:userId/password/`

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
  "currentPassword": "[valid old password]",
  "newPassword": "[valid new password]",
  "confirmPassword": "[valid confirm password]"
}
```

**Request Data example**

```json
{
  "currentPassword": "123789456",
  "newPassword": "789123456",
  "confirmPassword": "789123456"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{}
```

## Error Response

**[*] Condition:** If current password is incorrect

**Code:** `400 BAD REQUEST`

**Content:**

```json
{
  "errors": ["Current password is incorrect"]
}
```

**[*] Condition:** If current password same with new password

**Code:** `400 BAD REQUEST`

**Content:**

```json
{
  "errors": ["New password cannot be same as current password"]
}
```
