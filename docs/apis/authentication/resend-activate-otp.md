# Resend Activate OTP

## Sequence Diagram

![image info](./assets/resend-activate-otp.png)

---

## User Resend Activate OTP

Used to resend activate OTP code to user.

**URL:** `/api/v1/authentication/resend-activate-otp/`

**Method:** `POST`

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
  "phone": "[valid phone number]"
}
```

**Request Data example**

```json
{
  "phone": "+84918364535"
}
```

## Success Response

**Code:** `200 OK`

**Content example**

```json
{}
```

## Error Response

**Condition:** If OTP Authentication Service failed to send SMS to user.

**Code:** `400 BAD REQUEST`

**Content:**

```json
{}
```
